import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject, Injector,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { AlainI18NService, ALAIN_I18N_TOKEN, MenuService, SettingsService, TitleService, Menu } from '@delon/theme';
import { AlainConfigService, AlainPageHeaderConfig, InputBoolean, InputNumber, isEmpty } from '@delon/util';
import { NzAffixComponent } from 'ng-zorro-antd/affix';
import { merge, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { BreadcrumbOption } from 'ng-zorro-antd';

interface PageHeaderPath {
  title?: string;
  link?: string[];
}

@Component({
  selector: 'app-page-header',
  exportAs: 'pageHeader',
  templateUrl: './page-header.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppPageHeaderComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  private inited = false;
  private unsubscribe$ = new Subject<void>();
  @ViewChild('conTpl', { static: false }) private conTpl: ElementRef;
  @ViewChild('affix', { static: false }) private affix: NzAffixComponent;

/*  private get menus() {
    return this.menuSrv.getPathByUrl(this.router.url, this.recursiveBreadcrumb);
  }*/
  private getMenusUrl(url):Menu[] {
    return this.menuSrv.getPathByUrl(url, this.recursiveBreadcrumb);
  }
  _titleVal: string = '';
  paths: PageHeaderPath[] = [];

  // #region fields

  _title: string | null;
  _titleTpl: TemplateRef<void>;
  @Input()
  set title(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._title = null;
      this._titleTpl = value;
      this._titleVal = '';
    } else {
      this._title = value;
      this._titleVal = this._title;
    }
  }

  @Input() @InputBoolean() loading = false;
  @Input() @InputBoolean() wide = false;
  @Input() home: string;
  @Input() homeLink: string;
  @Input() homeI18n: string;
  @Input() @InputBoolean() autoBreadcrumb: boolean;
  @Input() @InputBoolean() autoTitle: boolean;
  @Input() @InputBoolean() syncTitle: boolean;
  @Input() @InputBoolean() fixed: boolean;
  @Input() @InputNumber() fixedOffsetTop: number;
  @Input() breadcrumb: TemplateRef<void>;
  @Input() @InputBoolean() recursiveBreadcrumb: boolean;
  @Input() logo: TemplateRef<void>;
  @Input() action: TemplateRef<void>;
  @Input() content: TemplateRef<void>;
  @Input() extra: TemplateRef<void>;
  @Input() tab: TemplateRef<void>;
   title18n:string = 'title18n';
  menus:Menu[]
  // #endregion

  constructor(
    settings: SettingsService,
    private renderer: Renderer2,
    private router: Router,
    private injector: Injector,
    private menuSrv: MenuService,
    @Optional() @Inject(ALAIN_I18N_TOKEN) private i18nSrv: AlainI18NService,
    @Optional() @Inject(TitleService) private titleSrv: TitleService,
    @Optional() @Inject(ReuseTabService) private reuseSrv: ReuseTabService,
    private cdr: ChangeDetectorRef,
    configSrv: AlainConfigService,
  ) {
    configSrv.attach<AlainPageHeaderConfig, 'pageHeader'>(this, 'pageHeader', {
      home: '首页',
      homeLink: '/',
      autoBreadcrumb: true,
      recursiveBreadcrumb: false,
      autoTitle: true,
      syncTitle: true,
      fixed: false,
      fixedOffsetTop: 64,
    });
    settings.notify
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(w => this.affix && w.type === 'layout' && w.name === 'collapsed'),
      )
      .subscribe(() => this.affix.updatePosition({} as any));

    merge(menuSrv.change.pipe(filter(() => this.inited)), router.events.pipe(filter(e => e instanceof NavigationEnd)), i18nSrv.change)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.refresh());
  }

  refresh() {
    this.setTitle().genBreadcrumb();
    this.cdr.detectChanges();
  }
  private getParentPath(url:string):string{
    return url.substring(0,url.lastIndexOf("/"));
  }
  private genBreadcrumb() {
    let url=this.router.url;
    let size=url.split("/").length;
    this.menus=this.getMenusUrl(url);
    for(let k=0;k<size;k++){
      if(this.menus.length>0){
          break;
      }else{
        url=this.getParentPath(url);
        this.menus=this.getMenusUrl(url);
      }
    }
    if(url===this.router.url){//导航菜单
      this.pathPorcess();
    }else{
      const activatedRoute = this.injector.get(ActivatedRoute);
      const breadcrumbOption: BreadcrumbOption[]= this.getBreadcrumbs(activatedRoute.root).filter(item => item.label !== 'no');
      breadcrumbOption.forEach(v=>{
        let menu:Menu={};
        menu.link=v.url;
        menu.i18n=v.label;
        this.menus.push(menu);
      })
      this.pathPorcess();
    }
    return this;
  }
  private pathPorcess(){
    const paths: PageHeaderPath[] = [];
    this.menus.forEach(item => {
      if (typeof item.hideInBreadcrumb !== 'undefined' && item.hideInBreadcrumb) return;
      let title = item.text;
      if (item.i18n && this.i18nSrv) title = this.i18nSrv.fanyi(item.i18n);
      paths.push({ title, link: (item.link && [item.link]) as string[] });
    });
    // add home
    if (this.home) {
      paths.splice(0, 0, {
        title: (this.homeI18n && this.i18nSrv && this.i18nSrv.fanyi(this.homeI18n)) || this.home,
        link: [this.homeLink],
      });
    }
    this.paths = paths;
  }
  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: BreadcrumbOption[] = []): BreadcrumbOption[] {
    const children: ActivatedRoute[] = route.children;
    // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      if (child.outlet === PRIMARY_OUTLET) {
        // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
        // Parse this layer and generate a breadcrumb item.
        const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
        const nextUrl = url + `/${routeURL}`;
        // If have terminalType, go to generate a breadcrumb for it.
        if (child.snapshot.data.hasOwnProperty(this.title18n)) {
          const breadcrumb: BreadcrumbOption = {
            label: child.snapshot.data[this.title18n] || 'title18n',
            params: child.snapshot.params,
            url: nextUrl,
          };
          breadcrumbs.push(breadcrumb);
        }
        return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
      }
    }
  }
  private setTitle() {
    if (this._title == null && this._titleTpl == null && this.autoTitle && this.menus&&  this.menus.length > 0) {
      const item = this.menus[this.menus.length - 1];
      let title = item.text;
      if (item.i18n && this.i18nSrv) title = this.i18nSrv.fanyi(item.i18n);
      this._titleVal = title!;
    }

    if (this._titleVal && this.syncTitle) {
      if (this.titleSrv) {
        this.titleSrv.setTitle(this._titleVal);
      }
      if (this.reuseSrv) {
        this.reuseSrv.title = this._titleVal;
      }
    }

    return this;
  }

  checkContent() {
    if (isEmpty(this.conTpl.nativeElement)) {
      this.renderer.setAttribute(this.conTpl.nativeElement, 'hidden', '');
    } else {
      this.renderer.removeAttribute(this.conTpl.nativeElement, 'hidden');
    }
  }

  ngOnInit() {
    this.refresh();
    this.inited = true;
  }

  ngAfterViewInit(): void {
    this.checkContent();
  }

  ngOnChanges(): void {
    if (this.inited) this.refresh();
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}

import { STChange, STColumn, STComponent, STData, STReq } from '@delon/abc';
import { ChangeDetectorRef, ViewChild } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { CommonService } from '../service/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../service/user/user.service';
import { SFComponent } from '@delon/form';

export class ListComponent {
  public q: any = {}; // 封装表达查询条件，如果喜欢sf组件，则不需要封装此对象
  public request: STReq = {
    method: 'POST',
    params: { 'search': {} },
    allInBody: true,
  };
  public loading = false;
  public selectedRows: STData[] = [];
  public path: string;
  public columns: STColumn[] = [{ title: '编号', index: 'uuid', type: 'checkbox' }];
  @ViewChild('st', { static: false }) public st: STComponent;
  @ViewChild('sf', { static: false }) public sf: SFComponent;

  constructor(protected  url, protected commonService: CommonService, public modal: NzModalService, public cdr: ChangeDetectorRef, public router: Router) {
    this.path = this.router.url.substring(0, this.router.url.lastIndexOf('/'));
  }

  public get listUrl() {
    return this.url + '/list';
  }

  ngOnInit(): void {
    console.log('onInit');
  }

  public submit(event) {
    this.selectedRows = [];
    this.request.params = { 'search': event },
      this.st.req = this.request;
    this.st.reload();
  }

  pushOper() {
    this.columns.push(
      {
        title: '操作',
        buttons: [
          {
            i18n: 'menu.operator.detail',
            click: (item: any) => this.detail(item),
          },
          {
            i18n: 'menu.operator.edit',
            click: (item: any) => this.edit(item),
          },
        ]
        ,
      },
    );
  }

  remove() {
    this.commonService.delete(this.selectedRows.map((i) => i.uuid).join(',')).subscribe(v => {
      this.commonService.responseWrapperProcess(v, (successData) => {
        this.st.clearCheck();
        this.st.reload();
        this.modal.success({
          nzTitle: '',
          nzContent: '删除成功',
          nzMask: false,
        });
      }, (failureData) => {

      });
    });
  }

  stChange(e: STChange) {
    switch (e.type) {
      case 'checkbox':
        this.selectedRows = e.checkbox;
        this.cdr.detectChanges();
        break;
    }
  }

  detail(item: any) {
    this.router.navigateByUrl(this.path + '/detail?uuid=' + item.uuid);
  }

  edit(item: any) {
    this.router.navigateByUrl(this.path + '/edit?uuid=' + item.uuid);
  }

  add() {
    this.router.navigateByUrl(this.path + '/edit');
  }
}

import { Injectable, Injector, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MenuService, SettingsService, TitleService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { ACLService } from '@delon/acl';
import { TranslateService } from '@ngx-translate/core';
import { I18NService } from '../i18n/i18n.service';

import { NzIconService } from 'ng-zorro-antd/icon';
import { ICONS } from '../../../style-icons';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { MenuDataService } from './menu-data.service';
import { UserService } from '../../service/user/user.service';
import { deepCopy } from '@delon/util';

/**
 * Used for application startup
 * Generally used to get the basic data of the application, like: Menu Data, User Data, etc.
 */
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,
    private translate: TranslateService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private settingService: SettingsService,
    private route: ActivatedRoute,
    private aclService: ACLService,
    private titleService: TitleService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private httpClient: HttpClient,
    private menuDataService: MenuDataService,
    private userService: UserService,
    public router: Router,
    private injector: Injector,
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }

  private viaMockI18n(resolve: any, reject: any) {
    this.httpClient
      .get(`assets/tmp/i18n/${this.i18n.defaultLang}.json`)
      .subscribe(langData => {
        this.translate.setTranslation(this.i18n.defaultLang, langData);
        this.translate.setDefaultLang(this.i18n.defaultLang);

        this.viaMock(resolve, reject);
      });
  }

  getUrlParams(params) {
    const urlObj = {};
    if (!window.location.search) {
      return false;
    }
    const urlParams = window.location.search.substring(1);
    const urlArr = urlParams.split('&');
    for (let i = 0; i < urlArr.length; i++) {
      const urlArrItem = urlArr[i].split('=');
      urlObj[urlArrItem[0]] = urlArrItem[1];
    }
    // 判断是否有参数
    if (arguments.length >= 1) {
      return urlObj[params];
    }
    return urlObj;
  }

  dingdingLogin(resolve: any, reject: any) {
    const app: any = {
      name: `测试报告填报系统`,
      description: `测试报告填报系统`,
    };

    const code = this.getUrlParams('code');
    const state = this.getUrlParams('state');
    this.userService.dingdingLogin(code, state).subscribe(res => {
      this.userService.responseWrapperProcess(res, (successData) => {
        const user = successData;
        user['avatar'] = './assets/tmp/img/avatar.jpg';
        this.menuDataService.permissionsLoginUser = deepCopy(user['permissions']);
        user['permissions'] = [];
        this.tokenService.set(user);
        this.setProcess(app, user, resolve, reject);
      }, (failureData) => {
        this.tokenService.clear();
        this.router.navigateByUrl(this.tokenService.login_url);
        resolve({});
      });
    });

  }

  private viaMock(resolve: any, reject: any) {
    const location: string = window.location.toString();
    if (location.indexOf('passport/ding-talk') !== -1) {
      this.dingdingLogin(resolve, reject);
      return;
    }
    const app: any = {
      name: `测试报告填报系统`,
      description: `测试报告填报系统`,
    };
    let user = this.tokenService.get();
    user['avatar'] = './assets/tmp/img/avatar.jpg';
    if (!this.menuDataService.permissionsLoginUser || this.menuDataService.permissionsLoginUser.length === 0) { // 通过token换取权限
      this.userService.tokenLogin(user['token']).subscribe(res => {
        this.userService.responseWrapperProcess(res, (successData) => {
          user = successData;
          this.menuDataService.permissionsLoginUser = deepCopy(user['permissions']);
          user['permissions'] = [];
          this.setProcess(app, user, resolve, reject);
        }, (failureData) => {
          this.tokenService.clear();
          this.router.navigateByUrl(this.tokenService.login_url);
          resolve({});
        });
      });
    } else {
      this.setProcess(app, user, resolve, reject);
    }

  }

  private setProcess(app, user, resolve: any, reject: any) {
    // Application information: including site name, description, year
    this.settingService.setApp(app);
    // User information: including name, avatar, email address
    this.settingService.setUser(user);
    // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
    // Menu data, https://ng-alain.com/theme/menu
    this.menuService.add(this.menuDataService.allMenu);
    this.menuDataService.initAcl();

    // Can be set page suffix title, https://ng-alain.com/theme/title
    this.titleService.suffix = app.name;

    resolve({});
  }

  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve, reject) => {
      // http
      // this.viaHttp(resolve, reject);
      // mock：请勿在生产环境中这么使用，viaMock 单纯只是为了模拟一些数据使脚手架一开始能正常运行
      this.viaMockI18n(resolve, reject);

    });
  }
}

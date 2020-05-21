import { Injectable } from '@angular/core';
import { Menu, MenuService } from '@delon/theme';
import { ACLService } from '@delon/acl';

@Injectable({
  providedIn: 'root',
})
export class MenuDataService {
  allMenu: Menu[] = [
    {
      'text': '主导航',
      'i18n': 'menu.main',
      'group': true,
      'hideInBreadcrumb': true,
      'children': [
        {
          'key': 'security',
          'text': '身份管理',
          'i18n': 'menu.identity',
          'icon': 'anticon-user',
          'children': [
            {
              'key': 'user',
              'text': '用户管理',
              'link': '/user',
              'i18n': 'menu.user',
            },
            {
              'key': 'role',
              'text': '角色管理',
              'link': '/role',
              'i18n': 'menu.role',
            },
          ],

        },
        {
          'key': 'business',
          'text': '业务管理',
          'i18n': 'menu.business',
          'icon': 'anticon-dashboard',
          'children': [
            {
              'key': 'instrument',
              'text': '仪器管理',
              'link': '/business/instrument',
              'i18n': 'menu.instrument',
            }, {
              'key': 'standard',
              'text': '标准管理',
              'link': '/business/standard',
              'i18n': 'menu.standard',
            }
          ],
        },
        {
          'key': 'record',
          'text': '报告管理',
          'i18n': 'menu.record',
          'icon': 'anticon-dashboard',
          'children': [
          {
              'key': 'deviceRecord',
              'text': '设备',
              'link': '/business/device-record',
              'i18n': 'menu.deviceRecord',
            },
          ],
        },
      ],
    }];
  public permissionsLoginUser: any[] = [];
  private permissionsLoginUserMap = new Map<string, any>();

  constructor(public aclService: ACLService, private menuSrv: MenuService) {
    this.allMenu.forEach(v => {
      v.children.forEach(k => {
         this.keyToAcl(k);
      });
    });
  }

  public keyToAcl(menu: Menu) {
    if (menu.key) {
      menu.acl = menu.key;
    }
    if (menu.children) {
      menu.children.forEach(v => {
        this.keyToAcl(v);
      });
    }

  }

  public initAcl() {
    const roles = [];
    this.permissionsLoginUser.forEach(v => {
      this.permissionsLoginUserMap.set(v['code'], v);
      roles.push(v['code']);
    });
    this.aclService.setRole(roles);
    this.menuSrv.resume();
    this.aclService.setFull(false);
  }
}

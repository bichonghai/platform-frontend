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
              'link': '/security/user',
              'i18n': 'menu.user',
            },
            {
              'key': 'role',
              'text': '角色管理',
              'link': '/security/role',
              'i18n': 'menu.role',
            },
          ],

        },
        {
          'key': 'business',
          'text': '业务管理',
          'i18n': 'menu.business',
          'icon': 'anticon-dashboard',
          'children': [{
              'key': 'standard',
              'text': '标准管理',
              'link': '/business/standard',
              'i18n': 'menu.standard',
            }, {
              'key': 'project',
              'text': '项目管理',
              'link': '/business/project',
              'i18n': 'menu.project',
            }, {
              'key': 'project',
              'text': '板厚截面位置',
              'link': '/business/thickness-section-position',
              'i18n': 'menu.thicknessSectionPosition',
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
              'text': '样机报告',
              'link': '/business/device-record',
              'i18n': 'menu.deviceRecord',
            },
            {
              'key': 'instrumentRecord',
              'text': '样机仪器使用',
              'link': '/business/instrument-record',
              'i18n': 'menu.instrumentRecord',
            },
            {
              'key': 'thicknessRecord',
              'text': '样机表面报告',
              'link': '/business/thickness-record',
              'i18n': 'menu.thicknessRecord',
            },
            {
              'key': 'strengthStaticLoadRecord',
              'text': '静载强度报告',
              'link': '/business/strength-static-load-record',
              'i18n': 'menu.strengthStaticLoadRecord',
            },
            {
              'key': 'strengthDynamicLoadRecord',
              'text': '动载强度报告',
              'link': '/business/strength-dynamic-load-record',
              'i18n': 'menu.strengthDynamicLoadRecord',
            },
            {
              'key': 'rigidityStaticRecord',
              'text': '静态刚性报告',
              'link': '/business/rigidity-static-record',
              'i18n': 'menu.rigidityStaticRecord',
            },
            {
              'key': 'rigidityDynamicRecord',
              'text': '动态刚性报告',
              'link': '/business/rigidity-dynamic-record',
              'i18n': 'menu.rigidityDynamicRecord',
            },
            {
              'key': 'heightGaugeRecord',
              'text': '轨道高低差报告',
              'link': '/business/height-gauge-record',
              'i18n': 'menu.heightGaugeRecord',
            },
            {
              'key': 'gaugeRecord',
              'text': '轨距报告',
              'link': '/business/gauge-record',
              'i18n': 'menu.gaugeRecord',
            },
            {
              'key': 'diagonalRecord',
              'text': '轨道高低差报告',
              'link': '/business/diagonal-record',
              'i18n': 'menu.diagonalRecord',
            },
            {
              'key': 'inclinationRecord',
              'text': '倾斜度报告',
              'link': '/business/inclination-record',
              'i18n': 'menu.inclinationRecord',
            },
            {
              'key': 'samePositionDifferenceRecord',
              'text': '同位差报告',
              'link': '/business/same-position-difference-record',
              'i18n': 'menu.samePositionDifferenceRecord',
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

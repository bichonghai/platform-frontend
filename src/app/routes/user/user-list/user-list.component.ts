import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ServicePathService } from '../../../service/service-path.service';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user/user.service';
import { ListComponent } from '../../common/component/list-component';
import { NzModalService } from 'ng-zorro-antd';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '@core';
import { SFComponent } from '@delon/form';
import { zip } from 'rxjs';
import { RoleService } from '../../../service/role/role.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [],
})
export class UserListComponent extends ListComponent implements OnInit {
  schema = {
    properties: {
      userName: { type: 'string', maxLength: 50, ui: { i18n: 'user.userName' } },
      userFullName: { type: 'string', maxLength: 50, ui: { i18n: 'user.userFullName' } },
    },
    ui: {
      spanLabel: 8,
    },
  };
  isVisible = false;
  item: any = {};
  roleUuids = [];
  roles = [];

  constructor(public userService: UserService, public router: Router, private servicePathService: ServicePathService, public roleService: RoleService,
              public cdr: ChangeDetectorRef, public modal: NzModalService, @Inject(ALAIN_I18N_TOKEN) private i18NService: I18NService) {
    super(servicePathService.user, userService, modal, cdr, router);
    for (const entry of userService.listPropertys) {
      this.columns.push({ title: { i18n: 'user.' + entry }, index: entry });
    }
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
            acl: ['user:edit'],
          },
          {
            i18n: 'user.role.manager',
            acl: ['user.role.manager'],
            click: (item: any) => this.showModal(item),
          },
        ]
        ,
      },
    );
  }

  showModal(item): void {
    this.item = item;
    zip(this.userService.userRoleUuids(item.uuid), this.roleService.listAll()).subscribe(([userRoleUuidsData, rolesData]) => {
      this.commonService.responseWrapperProcess(userRoleUuidsData, (successData) => {
        this.roleUuids = successData;

      }, (failureData) => {

      });
      this.commonService.responseWrapperProcess(rolesData, (successData) => {
        this.roles = successData;

      }, (failureData) => {

      });
      this.isVisible = true;
    });
  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {
    this.userService.userRoleUuidsToUser(this.item.uuid, this.roleUuids).subscribe(v => {
      this.commonService.responseWrapperProcess(v, (successData) => {
        this.roleUuids = successData;
        this.isVisible = false;
      }, (failureData) => {

      });
    });

  }
}

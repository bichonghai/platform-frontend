import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicePathService } from '../../../service/service-path.service';
import { NzModalService } from 'ng-zorro-antd';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../core';
import { RoleService } from '../../../service/role/role.service';
import { ListComponent } from '../../common/component/list-component';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styles: [],
})
export class RoleListComponent extends ListComponent implements OnInit {
  schema = {
    properties: {
      roleName: { type: 'string', maxLength: 50, ui: { i18n: 'role.roleName' } },
      description: { type: 'string', maxLength: 50, ui: { i18n: 'role.description' } },
    },
    ui: {
      spanLabel: 8,
    },
  };

  constructor(public roleService: RoleService, public router: Router, private servicePathService: ServicePathService,
              public cdr: ChangeDetectorRef, public modal: NzModalService, @Inject(ALAIN_I18N_TOKEN) private i18NService: I18NService) {
    super(servicePathService.role, roleService, modal, cdr, router);
    for (let entry of roleService.listPropertys) {
      this.columns.push({ title: { i18n: 'role.' + entry }, index: entry });
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
            acl: ['role:edit'],
            click: (item: any) => this.edit(item),
          },
        ]
        ,
      },
    );
  }
}

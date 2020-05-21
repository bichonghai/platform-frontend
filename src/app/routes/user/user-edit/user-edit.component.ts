import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../service/user/user.service';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { FormProperty, PropertyGroup } from '@delon/form';
import { I18NService } from '@core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { EditComponent } from '../../common/component/edit-component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: [],
})
export class UserEditComponent extends EditComponent implements OnInit {

  schema = {
    properties: {
      userName: { type: 'string', ui: { i18n: 'user.userName' }, maxLength: 50 },
      userFullName: { type: 'string', ui: { i18n: 'user.userFullName' }, maxLength: 50 },
      password: { type: 'string', maxLength: 50, 'ui': { 'type': 'password', i18n: 'user.password' } },
      sex: {
        type: 'string', maxLength: 50,
        enum: [
          { label: '请选择', value: '' },
          { label: '男', value: '男' },
          { label: '女', value: '女' },
        ],
        default: '',
        ui: {
          widget: 'select',
          i18n: 'user.sex',
        },
      },
      email: {
        type: 'string', maxLength: 50, ui: {
          i18n: 'user.email',
          validator: (value: any, formProperty: FormProperty, form: PropertyGroup) => {
            return [];
          },
        },
      },
      telephone: { type: 'string', ui: { i18n: 'user.telephone' }, maxLength: 50 },
      mobilephone: { type: 'string', ui: { i18n: 'user.mobilephone' }, maxLength: 50 },
      address: { type: 'string', ui: { i18n: 'user.address' }, maxLength: 50 },
    },
    required: ['userName', 'password'],
    ui: {
      spanLabelFixed: 150,
      grid: { span: 24 },
    },
  };

  constructor(public userService: UserService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(userService, modal, msg, router, i18NService, activatedRoute);

  }

  ngOnInit(): void {
    this.listPropertys = ['uuid', ...this.userService.listPropertys];
    super.ngOnInit();
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { EditComponent } from '../../../common/component/edit-component';
import { FormProperty, PropertyGroup } from '@delon/form';
import { UserService } from '../../../../service/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '@core';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styles: [],
})
export class UserCenterComponent extends EditComponent implements OnInit {

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
              @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(userService, modal, msg, router, i18NService, activatedRoute);

  }

  detai() {
    const user = this.tokenService.get();
    if (user.id && user.id.length > 0) {
      this.commonService.detail(user.id).subscribe((v: any) => {
        this.commonService.responseWrapperProcess(v, (successData) => {
          this.listPropertys.forEach(v2 => {
            this.model[v2] = successData[v2];
          });
          if (this.sf) {
            this.sf.refreshSchema();
          }
        }, (failData) => {
          this.msg.error('获取信息失败');
        });

      });
    }
  }

  submit(event) {
    this.commonService.addOrUpdate(event).subscribe(v => {
      this.commonService.responseWrapperProcess(v, (successData) => {
        this.modal.success({
          nzTitle: '',
          nzContent: '操作成功',
          nzMask: false,
        });
      }, (failureData) => {
        this.commonService.formErrorProcess(failureData, this.sf);
      });
    });
  }

  ngOnInit(): void {
    this.listPropertys = ['uuid', ...this.userService.listPropertys];
    this.detai();
  }
}

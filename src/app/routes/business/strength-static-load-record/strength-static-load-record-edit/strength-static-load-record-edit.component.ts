import { Component, Inject, OnInit } from '@angular/core';
import { ReportEditComponent } from '../../../common/component/report-edit-component';
import { SFArrayWidgetSchema, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '@core';
import { zip } from 'rxjs';
import { StrengthStaticLoadRecordService } from '../../../../service/strength-static-load-record/strength-static-load-record.service';

@Component({
  selector: 'app-strength-static-load-record-edit',
  templateUrl: './strength-static-load-record-edit.component.html',
  styles: [
  ]
})
export class StrengthStaticLoadRecordEditComponent  extends ReportEditComponent implements OnInit {
  schema: SFSchema = {
    properties: {
      deviceRecordUuid: {
        type: 'string',
        enum: [],

        ui: {
          i18n: 'deviceRecord.name',
          widget: 'cascader',
        } as SFSelectWidgetSchema,
      },
      workingDetails: {
        type: 'array',
        maxItems: 14,
        items: {
          type: 'object',
          properties: {
            workingDetail: { type: 'string', ui: { i18n: 'strengthStaticLoadRecord.workingDetail', widget: 'textarea',  autosize: { minRows: 2, maxRows: 6 } }, maxLength: 200 },
          },
        },
        ui: { i18n: 'strengthStaticLoadRecord.workingDetails', grid: { span: 24 } } as SFArrayWidgetSchema,
      },
      itemDetails: {
        type: 'array',
        maxItems: 14,
        items: {
          type: 'object',
          properties: {
            channel: { type: 'string', ui: { i18n: 'strengthStaticLoadRecord.channel' }, maxLength: 50 },
            eid: { type: 'string', ui: { i18n: 'strengthStaticLoadRecord.eid' }, maxLength: 50 },
            number: { type: 'string', ui: { i18n: 'strengthStaticLoadRecord.number' }, maxLength: 50 },
            position: { type: 'string', ui: { i18n: 'strengthStaticLoadRecord.position' }, maxLength: 50 },
            description: { type: 'string', ui: { i18n: 'strengthStaticLoadRecord.description' }, maxLength: 50 },
          },
        },
        ui: { i18n: 'strengthStaticLoadRecord.itemDetails', grid: { span: 24 } } as SFArrayWidgetSchema,
      },
    },
    required: ['deviceRecordUuid'],
    ui: {
      spanLabelFixed: 120,
      grid: { span: 12 },
    },
  };

  constructor(public strengthStaticLoadRecordService: StrengthStaticLoadRecordService, public deviceRecordService: DeviceRecordService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(strengthStaticLoadRecordService, modal, msg, router, i18NService, activatedRoute);
    zip(deviceRecordService.tree()).subscribe(([deviceRecordData]) => {
      this.initFinish = true;
      this.commonService.responseWrapperProcess(deviceRecordData, (successData: any[]) => {
        this.deviceRecordProcess(successData, null);
      }, (failData) => {
        this.deviceRecordProcess(null, failData);
      });
    });
  }

  submit(event) {
    this.commonService.addOrUpdate(event).subscribe(v => {
      this.commonService.responseWrapperProcess(v, (successData) => {
        this.modal.success({
          nzTitle: '',
          nzContent: '操作成功',
          nzMask: false,
          nzOnOk: () => {
            this.router.navigateByUrl(this.path + '/list');
          },
        });
      }, (failureData) => {
        this.commonService.formErrorProcess(failureData, this.sf);
      });
    });
  }

  ngOnInit(): void {
    this.listPropertys = ['uuid', ...this.strengthStaticLoadRecordService.editPropertys];
    super.ngOnInit();

  }

  deviceRecordProcess(successData, failureData) {
    super.deviceRecordProcess(this.schema, successData);
  }
}

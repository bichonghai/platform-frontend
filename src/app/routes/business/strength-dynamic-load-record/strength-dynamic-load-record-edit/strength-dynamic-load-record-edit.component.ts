import { Component, Inject, OnInit } from '@angular/core';
import { ReportEditComponent } from '../../../common/component/report-edit-component';
import { SFArrayWidgetSchema, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';
import { zip } from 'rxjs';
import { StrengthDynamicLoadRecordService } from '../../../../service/strength-dynamic-load-record/strength-dynamic-load-record.service';

@Component({
  selector: 'app-strength-dynamic-load-record-edit',
  templateUrl: './strength-dynamic-load-record-edit.component.html',
  styles: [
  ]
})
export class StrengthDynamicLoadRecordEditComponent  extends ReportEditComponent implements OnInit {
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
            workingDetail: { type: 'string', ui: { i18n: 'strengthDynamicLoadRecord.workingDetail', widget: 'textarea',  autosize: { minRows: 2, maxRows: 6 } }, maxLength: 200 },
          },
        },
        ui: { i18n: 'strengthDynamicLoadRecord.workingDetails', grid: { span: 24 } } as SFArrayWidgetSchema,
      },
      itemDetails: {
        type: 'array',
        maxItems: 14,
        items: {
          type: 'object',
          properties: {
            channel: { type: 'string', ui: { i18n: 'strengthDynamicLoadRecord.channel' }, maxLength: 50 },
            eid: { type: 'string', ui: { i18n: 'strengthDynamicLoadRecord.eid' }, maxLength: 50 },
            number: { type: 'string', ui: { i18n: 'strengthDynamicLoadRecord.number' }, maxLength: 50 },
            position: { type: 'string', ui: { i18n: 'strengthDynamicLoadRecord.position' }, maxLength: 50 },
            description: { type: 'string', ui: { i18n: 'strengthDynamicLoadRecord.description' }, maxLength: 50 },
          },
        },
        ui: { i18n: 'strengthDynamicLoadRecord.itemDetails', grid: { span: 24 } } as SFArrayWidgetSchema,
      },
    },
    required: ['deviceRecordUuid'],
    ui: {
      spanLabelFixed: 120,
      grid: { span: 12 },
    },
  };

  constructor(public strengthDynamicLoadRecordService: StrengthDynamicLoadRecordService, public deviceRecordService: DeviceRecordService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(strengthDynamicLoadRecordService, modal, msg, router, i18NService, activatedRoute);
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
    this.listPropertys = ['uuid', ...this.strengthDynamicLoadRecordService.editPropertys];
    super.ngOnInit();

  }

  deviceRecordProcess(successData, failureData) {
    super.deviceRecordProcess(this.schema, successData);
  }
}

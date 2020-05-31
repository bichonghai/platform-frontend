import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';
import { InstrumentRecordService } from '../../../../service/instrument-record/instrument-record.service';
import { ReportEditComponent } from '../../../common/component/report-edit-component';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';
import { zip } from 'rxjs';
import { SFArrayWidgetSchema, SFSchema, SFSelectWidgetSchema } from '@delon/form';

@Component({
  selector: 'app-instrument-record-edit',
  templateUrl: './instrument-record-edit.component.html',
  styles: [
  ]
})
export class InstrumentRecordEditComponent  extends ReportEditComponent implements OnInit {
  schema: SFSchema = {
    properties: {
      deviceRecordUuid: {
        type: 'string',
        enum: [],
        default: '',
        ui: {
          i18n: 'deviceRecord.name',
          widget: 'cascader',
        } as SFSelectWidgetSchema,
      },
      instrumentDetails: {
        type: 'array',
        title: '检测仪器',
        maxItems: 14,
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              ui: { i18n: 'instrumentRecord.name' },
              maxLength: 50,
            },
            code: { type: 'string', ui: { i18n: 'instrumentRecord.code' }, maxLength: 50 },
            type: { type: 'string', ui: { i18n: 'instrumentRecord.type' }, maxLength: 50 },
            validityDate: {
              type: 'string',
              format: 'date',
              ui: { i18n: 'instrumentRecord.validityDate' },
              maxLength: 50,
              grid: { span: 24 },
            },
            operator: { type: 'string', ui: { i18n: 'instrumentRecord.operator' }, maxLength: 50 },
            dataCollation: {
              type: 'string',
              ui: { i18n: 'instrumentRecord.dataCollation' },
              maxLength: 50,
            },
            dataAnalysis: {
              type: 'string',
              ui: { i18n: 'instrumentRecord.dataAnalysis' },
              maxLength: 50,
            },
          },
        },
        ui: { i18n: 'strengthStaticLoadRecord.instrumentDetails', grid: { span: 24 } } as SFArrayWidgetSchema,
      },
    },
    required: [],
    ui: {
      spanLabelFixed: 120,
      grid: { span: 12 },
    },
  };

  constructor(public instrumentRecordService: InstrumentRecordService, public deviceRecordService: DeviceRecordService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(instrumentRecordService, modal, msg, router, i18NService, activatedRoute);
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
    this.listPropertys = ['uuid', ...this.instrumentRecordService.editPropertys];
    super.ngOnInit();

  }

  deviceRecordProcess(successData, failureData) {
    super.deviceRecordProcess(this.schema, successData);
  }
}

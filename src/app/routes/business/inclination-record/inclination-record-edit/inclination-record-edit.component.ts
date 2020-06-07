import { Component, Inject, OnInit } from '@angular/core';
import { ReportEditComponent } from '../../../common/component/report-edit-component';
import { SFArrayWidgetSchema, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { TableWidgetComponent } from '../../common-business/table-widget/table-widget.component';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StandardService } from '../../../../service/standard/standard.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';
import { zip } from 'rxjs';
import { InclinationRecordService } from '../../../../service/inclination_record/inclination-record.service';

@Component({
  selector: 'app-inclination-record-edit',
  templateUrl: './inclination-record-edit.component.html',
  styles: [
  ]
})
export class InclinationRecordEditComponent extends ReportEditComponent implements OnInit {
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
      gateLocation: { type: 'string', ui: { i18n: 'inclinationRecord.gateLocation' }, maxLength: 50 },
      direction: { type: 'string', ui: { i18n: 'inclinationRecord.direction' }, maxLength: 50 },
      distance: { type: 'string', ui: { i18n: 'inclinationRecord.distance' }, maxLength: 50 },
      position: { type: 'string', ui: { i18n: 'inclinationRecord.position' }, maxLength: 50 },
      carSpace: { type: 'string', ui: { i18n: 'inclinationRecord.carSpace' }, maxLength: 50 },
      workingCondition: {
        type: 'string',
        ui: { i18n: 'inclinationRecord.workingCondition', widget: 'textarea', autosize: { minRows: 2, maxRows: 6 } },
        maxLength: 250,
      },
      workingDetails: {
        type: 'array',
        title: '报告纪录',
        maxItems: 14,
        items: {
          type: 'object',
          properties: {
            content: {
              type: 'string',
              ui: { i18n: 'inclinationRecord.content' },
              maxLength: 50,
            },
            point: {
              type: 'string',
              ui: { i18n: 'inclinationRecord.point' },
              maxLength: 50,
            },
            up: {
              type: 'number',
              ui: { i18n: 'inclinationRecord.up' },
              maxLength: 50,
            },
            down: {
              type: 'number',
              ui: { i18n: 'inclinationRecord.down' },
              maxLength: 50,
            },
            up2: {
              type: 'number',
              ui: { i18n: 'inclinationRecord.up2' },
              maxLength: 50,
            },
            down2: {
              type: 'number',
              ui: { i18n: 'inclinationRecord.down2' },
              maxLength: 50,
            },
            up3: {
              type: 'number',
              ui: { i18n: 'inclinationRecord.up3' },
              maxLength: 50,
            },
            down3: {
              type: 'number',
              ui: { i18n: 'inclinationRecord.down3' },
              maxLength: 50,
            },
            length: {
              type: 'number',
              ui: { i18n: 'inclinationRecord.length' },
              maxLength: 50,
            },
            standard: {
              type: 'string',
              enum: [],
              ui: {
                i18n: 'inclinationRecord.standard',
                widget: 'select',
              } as SFSelectWidgetSchema,
            },
          },
        },
        ui: {
          i18n: 'inclinationRecord.workingDetails',
          spanControl: 19,
          spanLabel: 5,
          grid: { span: 24 },
        } as SFArrayWidgetSchema,
      },
    },
    required: ['deviceRecordUuid'],
    ui: {
      spanLabelFixed: 120,
      grid: { span: 12 },
    },
  };

  constructor(public inclinationRecordService: InclinationRecordService, public deviceRecordService: DeviceRecordService,
              public router: Router, public activatedRoute: ActivatedRoute, public standardService: StandardService,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(inclinationRecordService, modal, msg, router, i18NService, activatedRoute);
    zip(deviceRecordService.tree(), standardService.listAll()).subscribe(([deviceRecordData, standardData]) => {
      this.initFinish = true;
      this.commonService.responseWrapperProcess(deviceRecordData, (successData: any[]) => {
        this.deviceRecordProcess(successData, null);
      }, (failData) => {
        this.deviceRecordProcess(null, failData);
      });
      this.commonService.responseWrapperProcess(standardData, (successData: any[]) => {
        this.standardProcess(successData, null);
      }, (failData) => {

      });
    });
    document.body.style.minWidth = '1200px';
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
    this.listPropertys = ['uuid', ...this.inclinationRecordService.editPropertys];
    super.ngOnInit();

  }

  standardProcess(successData: any[], failureData) {
    if (successData) {
      this.initFinish = true;
      const labelValue = [];
      if (successData) {
        successData.forEach(p => {
          labelValue.push({ label: p['name'], value: p['name'] });
        });
      }
      this.schema.properties.workingDetails.items.properties['standard'].enum = labelValue;
    }
  }

  deviceRecordProcess(successData, failureData) {
    super.deviceRecordProcess(this.schema, successData);
  }
}

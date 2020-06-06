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
import { SamePositionDifferenceRecordService } from '../../../../service/same_position_difference_record/same-position-difference-record.service';

@Component({
  selector: 'app-same-position-difference-record-edit',
  templateUrl: './same-position-difference-record-edit.component.html',
  styles: [
  ]
})
export class SamePositionDifferenceRecordEditComponent extends ReportEditComponent implements OnInit {
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
      workingCondition: {
        type: 'string',
        ui: { i18n: 'samePositionDifferenceRecord.workingCondition', widget: 'textarea', autosize: { minRows: 2, maxRows: 6 } },
        maxLength: 250,
      },
      workingDetails: {
        type: 'array',
        title: '报告纪录',
        maxItems: 14,
        items: {
          type: 'object',
          properties: {
            point: {
              type: 'string',
              ui: { i18n: 'samePositionDifferenceRecord.point' },
              maxLength: 50,
            },
            value1: {
              type: 'number',
              ui: { i18n: 'samePositionDifferenceRecord.value1' },
              maxLength: 50,
            },
            value2: {
              type: 'number',
              ui: { i18n: 'samePositionDifferenceRecord.value2' },
              maxLength: 50,
            },
            value3: {
              type: 'number',
              ui: { i18n: 'samePositionDifferenceRecord.value3' },
              maxLength: 50,
            },
            standard: {
              type: 'string',
              enum: [],
              ui: {
                i18n: 'samePositionDifferenceRecord.standard',
                widget: 'select',
              } as SFSelectWidgetSchema,
            },
          },
        },
        ui: {
          i18n: 'samePositionDifferenceRecord.workingDetails',
          widget: TableWidgetComponent.KEY,
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

  constructor(public samePositionDifferenceRecordService: SamePositionDifferenceRecordService, public deviceRecordService: DeviceRecordService,
              public router: Router, public activatedRoute: ActivatedRoute, public standardService: StandardService,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(samePositionDifferenceRecordService, modal, msg, router, i18NService, activatedRoute);
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
    this.listPropertys = ['uuid', ...this.samePositionDifferenceRecordService.editPropertys];
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

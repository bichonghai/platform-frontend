import { Component, Inject, OnInit } from '@angular/core';
import { ReportEditComponent } from '../../../common/component/report-edit-component';
import { SFArrayWidgetSchema, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { TableWidgetComponent } from '../../common-business/table-widget/table-widget.component';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';
import { zip } from 'rxjs';
import { DiagonalRecordService } from '../../../../service/diagonal-record/diagonal-record.service';

@Component({
  selector: 'app-diagonal-record-edit',
  templateUrl: './diagonal-record-edit.component.html',
  styles: [],
})
export class DiagonalRecordEditComponent extends ReportEditComponent implements OnInit {
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
        ui: { i18n: 'diagonalRecord.workingCondition', widget: 'textarea', autosize: { minRows: 2, maxRows: 6 } },
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
              type: 'number',
              ui: { i18n: 'diagonalRecord.point' },
              maxLength: 50,
            },
            value1: {
              type: 'number',
              ui: { i18n: 'diagonalRecord.value1' },
              maxLength: 50,
            },
            value2: {
              type: 'number',
              ui: { i18n: 'diagonalRecord.value2' },
              maxLength: 50,
            },
            value3: {
              type: 'number',
              ui: { i18n: 'diagonalRecord.value3' },
              maxLength: 50,
            },
            standard: {
              type: 'number',
              ui: { i18n: 'diagonalRecord.standard' },
              maxLength: 50,
            },
          },
        },
        ui: {
          i18n: 'diagonalRecord.workingDetails',
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

  constructor(public diagonalRecordService: DiagonalRecordService, public deviceRecordService: DeviceRecordService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(diagonalRecordService, modal, msg, router, i18NService, activatedRoute);
    zip(deviceRecordService.tree()).subscribe(([deviceRecordData]) => {
      this.initFinish = true;
      this.commonService.responseWrapperProcess(deviceRecordData, (successData: any[]) => {
        this.deviceRecordProcess(successData, null);
      }, (failData) => {
        this.deviceRecordProcess(null, failData);
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
    this.listPropertys = ['uuid', ...this.diagonalRecordService.editPropertys];
    super.ngOnInit();

  }

  deviceRecordProcess(successData, failureData) {
    super.deviceRecordProcess(this.schema, successData);
  }
}

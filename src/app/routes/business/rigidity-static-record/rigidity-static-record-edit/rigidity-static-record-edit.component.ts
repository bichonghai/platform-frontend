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
import { RigidityStaticRecordService } from '../../../../service/rigidity-static-record/rigidity-static-record.service';
import { TableWidgetComponent } from '../../common-business/table-widget/table-widget.component';

@Component({
  selector: 'app-rigidity-static-record-edit',
  templateUrl: './rigidity-static-record-edit.component.html',
  styles: [],
})
export class RigidityStaticRecordEditComponent extends ReportEditComponent implements OnInit {
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
      gateLocation: { type: 'string', ui: { i18n: 'rigidityStaticRecord.gateLocation' }, maxLength: 50 },
      direction: { type: 'string', ui: { i18n: 'rigidityStaticRecord.direction' }, maxLength: 50 },
      distance: { type: 'string', ui: { i18n: 'rigidityStaticRecord.distance' }, maxLength: 50 },
      trackLength: { type: 'string', ui: { i18n: 'rigidityStaticRecord.trackLength' }, maxLength: 50 },
      levelingInstrument: { type: 'string', ui: { i18n: 'rigidityStaticRecord.levelingInstrument' }, maxLength: 50 },
      carSpace: { type: 'string', ui: { i18n: 'rigidityStaticRecord.carSpace' }, maxLength: 50 },
      sectionPosition: { type: 'string', ui: { i18n: 'rigidityStaticRecord.sectionPosition' }, maxLength: 50 },
      workingDetails: {
        type: 'array',
        title: '报告纪录',
        maxItems: 14,
        items: {
          type: 'object',
          properties: {
            number: {
              type: 'number',
              ui: { i18n: 'rigidityStaticRecord.number' },
              maxLength: 50,
            },
            point: {
              type: 'number',
              ui: { i18n: 'rigidityStaticRecord.point' },
              maxLength: 50,
            },
            leftTrolley: {
              type: 'number',
              ui: { i18n: 'rigidityStaticRecord.leftTrolley' },
              maxLength: 50,
            },
            rightTrolley: {
              type: 'number',
              ui: { i18n: 'rigidityStaticRecord.rightTrolley' },
              maxLength: 50,
            },
            leftTrail: {
              type: 'number',
              ui: { i18n: 'rigidityStaticRecord.leftTrail' },
              maxLength: 50,
            },
            rightTrail: {
              type: 'number',
              ui: { i18n: 'rigidityStaticRecord.rightTrail' },
              maxLength: 50,
            },
          },
        },
        ui: {
          i18n: 'rigidityStaticRecord.workingDetails',
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

  constructor(public rigidityStaticRecordService: RigidityStaticRecordService, public deviceRecordService: DeviceRecordService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(rigidityStaticRecordService, modal, msg, router, i18NService, activatedRoute);
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
    this.listPropertys = ['uuid', ...this.rigidityStaticRecordService.editPropertys];
    super.ngOnInit();

  }

  deviceRecordProcess(successData, failureData) {
    super.deviceRecordProcess(this.schema, successData);
  }
}

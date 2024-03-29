import { Component, Inject, OnInit } from '@angular/core';
import { SFArrayWidgetSchema, SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';
import { ThicknessRecordService } from '../../../../service/thickness-record/thickness-record.service';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';
import { ReportEditComponent } from '../../../common/component/report-edit-component';
import { ThicknessSectionPositionService } from '../../../../service/thickness-section-position/thickness-section-position.service';
import { zip } from 'rxjs';

@Component({
  selector: 'app-thickness-record-edit',
  templateUrl: './thickness-record-edit.component.html',
  styles: [],
})
export class ThicknessRecordEditComponent extends ReportEditComponent implements OnInit {
  schema: SFSchema = {
    properties: {
      deviceRecordUuid: {
        type: 'string',
        enum: [],

        ui: {
          i18n: 'deviceRecord.name',
          minWidth: 150,
          widget: 'cascader',
        } as SFSelectWidgetSchema,
      },
      thicknessDetails: {
        type: 'array',
        title: '表面报告',
        maxItems: 14,
        items: {
          type: 'object',
          properties: {
            thicknessSectionPositionRecordUuid: {
              type: 'string',
              enum: [],

              ui: {
                i18n: 'thicknessRecord.thicknessSectionPositionRecordUuid',
                widget: 'cascader',
              } as SFSelectWidgetSchema,
            },
            thickness: { type: 'string', ui: { i18n: 'thicknessRecord.thickness' }, maxLength: 50 },
            paint: { type: 'string', ui: { i18n: 'thicknessRecord.paint' }, maxLength: 50 },
            rust: { type: 'string', ui: { i18n: 'thicknessRecord.rust' }, maxLength: 50 },
          },
        },
        ui: { i18n: 'thicknessRecord.thicknessDetails' } as SFArrayWidgetSchema,
      },
    },
    required: [],
    ui: {
      spanLabelFixed: 120,
    },
  };

  constructor(public thicknessRecordService: ThicknessRecordService, public deviceRecordService: DeviceRecordService,
              public thicknessSectionPositionService: ThicknessSectionPositionService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(thicknessRecordService, modal, msg, router, i18NService, activatedRoute);
    zip(deviceRecordService.tree(), thicknessSectionPositionService.tree()).subscribe(([deviceRecordData, thicknessSectionPositionData]) => {
      this.initFinish = true;
      this.commonService.responseWrapperProcess(deviceRecordData, (successData: any[]) => {
        this.deviceRecordProcess(successData, null);
      }, (failData) => {
        this.deviceRecordProcess(null, failData);
      });
      this.commonService.responseWrapperProcess(thicknessSectionPositionData, (successData: any[]) => {
        this.thicknessSectionPositionProcess(successData);
      }, (failData) => {
        this.thicknessSectionPositionProcess(null);
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
    this.listPropertys = ['uuid', ...this.thicknessRecordService.editPropertys];
    super.ngOnInit();

  }

  thicknessSectionPositionProcess(successData) {
    if (successData) {
      this.schema.properties.thicknessDetails.items.properties.thicknessSectionPositionRecordUuid['enum'] = successData;
    }
  }

  deviceRecordProcess(successData, failureData) {
    super.deviceRecordProcess(this.schema, successData);
  }
}

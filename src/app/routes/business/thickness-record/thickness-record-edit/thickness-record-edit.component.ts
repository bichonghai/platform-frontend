import { Component, Inject, OnInit } from '@angular/core';
import { EditComponent } from '../../../common/component/edit-component';
import { SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { InstrumentRecordService } from '../../../../service/instrument-record/instrument-record.service';
import { ProjectService } from '../../../../service/project/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';
import { ThicknessRecordService } from '../../../../service/thickness-record/thickness-record.service';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';
import { ReportEditComponent } from '../../../common/component/report-edit-component';

@Component({
  selector: 'app-thickness-record-edit',
  templateUrl: './thickness-record-edit.component.html',
  styles: [],
})
export class ThicknessRecordEditComponent extends ReportEditComponent implements OnInit {
  detailPropertys = new Set(['projectUuid', 'thicknessSectionPositionRecordUuid', 'thickness', 'paint', 'rust']);
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
      thickness: { type: 'string', ui: { i18n: 'thicknessRecord.thickness' }, maxLength: 50 },
      paint: { type: 'string', ui: { i18n: 'thicknessRecord.paint' }, maxLength: 50 },
      rust: { type: 'string', ui: { i18n: 'thicknessRecord.rust' }, maxLength: 50 },
    },
    required: ['deviceRecordUuid'],
    ui: {
      spanLabelFixed: 150,
      grid: { span: 12 },
    },
  };


  constructor(public thicknessRecordService: ThicknessRecordService, public deviceRecordService: DeviceRecordService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(thicknessRecordService, modal, msg, router, i18NService, activatedRoute);
    deviceRecordService.tree().subscribe(v => {
      this.initFinish = true;
      this.commonService.responseWrapperProcess(v, (successData: any[]) => {
        this.deviceRecordProcess(successData, null);
      }, (failData) => {
        this.deviceRecordProcess(null, failData);
      });
    });
  }

  ngOnInit(): void {
    this.listPropertys = ['uuid', ...this.thicknessRecordService.listPropertys];
    super.ngOnInit();

  }

  deviceRecordProcess(successData, failureData) {
    super.deviceRecordProcess(this.schema, successData);
  }
}

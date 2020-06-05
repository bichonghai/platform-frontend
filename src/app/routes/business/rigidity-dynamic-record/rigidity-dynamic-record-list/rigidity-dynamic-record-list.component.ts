import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ReportListComponent } from '../../../common/component/report-list-component';
import { SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';
import { Router } from '@angular/router';
import { ServicePathService } from '../../../../service/service-path.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';
import { RigidityDynamicRecordService } from '../../../../service/rigidity-dynamic-record/rigidity-dynamic-record.service';

@Component({
  selector: 'app-rigidity-dynamic-record-list',
  templateUrl: './rigidity-dynamic-record-list.component.html',
  styles: [
  ]
})
export class RigidityDynamicRecordListComponent  extends ReportListComponent implements OnInit {
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
    },
  };
  initFinish = false;

  constructor(public deviceRecordService: DeviceRecordService, public rigidityDynamicRecordService: RigidityDynamicRecordService, public router: Router,
              private servicePathService: ServicePathService,
              public cdr: ChangeDetectorRef, public modal: NzModalService, @Inject(ALAIN_I18N_TOKEN) private i18NService: I18NService) {
    super(servicePathService.rigidityDynamicRecord, rigidityDynamicRecordService, modal, cdr, router, deviceRecordService );
    deviceRecordService.tree().subscribe(v => {
      this.commonService.responseWrapperProcess(v, (successData: any[]) => {
        this.deviceRecordProcess(successData, null);
      }, (failData) => {
        this.deviceRecordProcess(null, failData);
      });
    });
  }
  deviceRecordProcess(successData, failureData) {
    super.deviceRecordProcess(this.schema, this.columns, successData, failureData, 'rigidityDynamicRecord', this.rigidityDynamicRecordService.listPropertys);
  }
  ngOnInit(): void {
  }

}

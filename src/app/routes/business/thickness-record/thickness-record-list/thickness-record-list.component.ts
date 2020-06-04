import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { Router } from '@angular/router';
import { ServicePathService } from '../../../../service/service-path.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';
import { ThicknessRecordService } from '../../../../service/thickness-record/thickness-record.service';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';
import { ReportListComponent } from '../../../common/component/report-list-component';

@Component({
  selector: 'app-thickness-record-list',
  templateUrl: './thickness-record-list.component.html',
  styles: [],
})
export class ThicknessRecordListComponent extends ReportListComponent implements OnInit {
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

  constructor(public deviceRecordService: DeviceRecordService, public thicknessRecordService: ThicknessRecordService, public router: Router,
              private servicePathService: ServicePathService,
              public cdr: ChangeDetectorRef, public modal: NzModalService, @Inject(ALAIN_I18N_TOKEN) private i18NService: I18NService) {
    super(servicePathService.thicknessRecord, thicknessRecordService, modal, cdr, router, deviceRecordService );
    deviceRecordService.tree().subscribe(v => {
      this.commonService.responseWrapperProcess(v, (successData: any[]) => {
        this.deviceRecordProcess(successData, null);
      }, (failData) => {
        this.deviceRecordProcess(null, failData);
      });
    });
  }
  deviceRecordProcess(successData, failureData) {
    super.deviceRecordProcess(this.schema, this.columns, successData, failureData, 'thicknessRecord', this.thicknessRecordService.listPropertys);
  }
  ngOnInit(): void {
  }

}

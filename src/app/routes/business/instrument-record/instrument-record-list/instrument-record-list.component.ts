import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicePathService } from '../../../../service/service-path.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';
import { SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { ReportListComponent } from '../../../common/component/report-list-component';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';
import { InstrumentRecordService } from '../../../../service/instrument-record/instrument-record.service';


@Component({
  selector: 'app-instrument-record-list',
  templateUrl: './instrument-record-list.component.html',
  styles: [],
})
export class InstrumentRecordListComponent extends ReportListComponent implements OnInit {
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
    ui: {
      spanLabel: 8,
    },
  };
  initFinish = false;

  constructor(public deviceRecordService: DeviceRecordService, public instrumentRecordService: InstrumentRecordService, public router: Router,
              private servicePathService: ServicePathService,
              public cdr: ChangeDetectorRef, public modal: NzModalService, @Inject(ALAIN_I18N_TOKEN) private i18NService: I18NService) {
    super(servicePathService.instrumentRecord, instrumentRecordService, modal, cdr, router, deviceRecordService);
    deviceRecordService.tree().subscribe(v => {
      this.commonService.responseWrapperProcess(v, (successData: any[]) => {
        this.deviceRecordProcess(successData, null);
      }, (failData) => {
        this.deviceRecordProcess(null, failData);
      });
    });
  }

  deviceRecordProcess(successData, failureData) {
    super.deviceRecordProcess(this.schema, this.columns, successData, failureData, 'instrumentRecord', this.instrumentRecordService.listPropertys);
  }

  ngOnInit(): void {
  }

}


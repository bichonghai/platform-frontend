import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportDetailComponent } from '../../../common/component/report-detail-component';
import { zip } from 'rxjs';
import { InstrumentRecordService } from '../../../../service/instrument-record/instrument-record.service';

@Component({
  selector: 'app-instrument-record-detail',
  templateUrl: './instrument-record-detail.component.html',
  styles: [
  ]
})
export class InstrumentRecordDetailComponent  extends ReportDetailComponent implements OnInit {

  constructor(public instrumentRecordService: InstrumentRecordService,
              public router: Router, public activatedRoute: ActivatedRoute) {
    super(instrumentRecordService, router, activatedRoute, instrumentRecordService.detailPropertys, 'instrumentRecord');
  }

  detail(): void {
    zip(this.commonService.detailJsonObject(this.uuid)).subscribe(([thicknessdData]) => {
      this.commonService.responseWrapperProcess(thicknessdData, (successData: any[]) => {
        this.detailPropertys.forEach(key => {
          if (key === 'deviceRecordUuid') {
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: successData['deviceRecordShow'] });
          } else {
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: successData[key] });
          }
        });
      }, (failData) => {

      });
    });
  }
}

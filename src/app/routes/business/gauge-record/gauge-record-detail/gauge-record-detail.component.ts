import { Component, OnInit } from '@angular/core';
import { ReportDetailComponent } from '../../../common/component/report-detail-component';
import { ActivatedRoute, Router } from '@angular/router';
import { zip } from 'rxjs';
import { GaugeRecordService } from '../../../../service/gauge-record/gauge-record.service';

@Component({
  selector: 'app-gauge-record-detail',
  templateUrl: './gauge-record-detail.component.html',
  styles: [
  ]
})
export class GaugeRecordDetailComponent extends ReportDetailComponent implements OnInit {

  constructor(public gaugeRecordService: GaugeRecordService,
              public router: Router, public activatedRoute: ActivatedRoute) {
    super(gaugeRecordService, router, activatedRoute, gaugeRecordService.detailPropertys, 'gaugeRecord');
  }

  detail(): void {
    zip(this.commonService.detailJsonObject(this.uuid)).subscribe(([detailData]) => {
      this.commonService.responseWrapperProcess(detailData, (successData: any[]) => {
        this.detailPropertys.forEach(key => {
          if (key === 'deviceRecordUuid') {
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: successData['deviceRecordShow'] });
          } else if (key === 'workingDetails') {
            const workingDetails: any[] = successData['workingDetails'];
            const data = {
              label: ['number', 'point', 'value', 'difference'],
              value: workingDetails,
            };
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: data });
          } else {
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: successData[key] });
          }
        });
      }, (failData) => {

      });
    });
  }
}

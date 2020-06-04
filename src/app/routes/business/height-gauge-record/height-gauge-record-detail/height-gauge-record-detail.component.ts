import { Component, OnInit } from '@angular/core';
import { ReportDetailComponent } from '../../../common/component/report-detail-component';
import { ActivatedRoute, Router } from '@angular/router';
import { zip } from 'rxjs';
import { HeightGaugeRecordService } from '../../../../service/height-gauge-record/height-gauge-record.service';

@Component({
  selector: 'app-height-gauge-record-detail',
  templateUrl: './height-gauge-record-detail.component.html',
  styles: [
  ]
})
export class HeightGaugeRecordDetailComponent extends ReportDetailComponent implements OnInit {

  constructor(public heightGaugeRecordService: HeightGaugeRecordService,
              public router: Router, public activatedRoute: ActivatedRoute) {
    super(heightGaugeRecordService, router, activatedRoute, heightGaugeRecordService.detailPropertys, 'heightGaugeRecord');
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
              label: ['number', 'point', 'leftTrolley', 'rightTrolley', 'leftTrail', 'rightTrail'],
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

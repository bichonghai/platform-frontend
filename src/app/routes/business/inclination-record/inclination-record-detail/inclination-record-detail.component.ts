import { Component, OnInit } from '@angular/core';
import { ReportDetailComponent } from '../../../common/component/report-detail-component';
import { ActivatedRoute, Router } from '@angular/router';
import { zip } from 'rxjs';
import { InclinationRecordService } from '../../../../service/inclination_record/inclination-record.service';

@Component({
  selector: 'app-inclination-record-detail',
  templateUrl: './inclination-record-detail.component.html',
  styles: [
  ]
})
export class InclinationRecordDetailComponent  extends ReportDetailComponent implements OnInit {

  constructor(public inclinationRecordService: InclinationRecordService,
              public router: Router, public activatedRoute: ActivatedRoute) {
    super(inclinationRecordService, router, activatedRoute, inclinationRecordService.detailPropertys, 'inclinationRecord');
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
              label: ['content', 'point', 'up', 'down', 'up2', 'down2', 'up3', 'down3', 'length'],
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

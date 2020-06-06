import { Component, OnInit } from '@angular/core';
import { ReportDetailComponent } from '../../../common/component/report-detail-component';
import { ActivatedRoute, Router } from '@angular/router';
import { zip } from 'rxjs';
import { SamePositionDifferenceRecordService } from '../../../../service/same_position_difference_record/same-position-difference-record.service';

@Component({
  selector: 'app-same-position-difference-record-detail',
  templateUrl: './same-position-difference-record-detail.component.html',
  styles: [
  ]
})
export class SamePositionDifferenceRecordDetailComponent  extends ReportDetailComponent implements OnInit {

  constructor(public samePositionDifferenceRecordService: SamePositionDifferenceRecordService,
              public router: Router, public activatedRoute: ActivatedRoute) {
    super(samePositionDifferenceRecordService, router, activatedRoute, samePositionDifferenceRecordService.detailPropertys, 'samePositionDifferenceRecord');
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
              label: ['point', 'value1', 'value2', 'value3', 'standard'],
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

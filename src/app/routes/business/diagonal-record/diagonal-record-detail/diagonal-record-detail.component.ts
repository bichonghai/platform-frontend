import { Component, OnInit } from '@angular/core';
import { ReportDetailComponent } from '../../../common/component/report-detail-component';
import { ActivatedRoute, Router } from '@angular/router';
import { zip } from 'rxjs';
import { DiagonalRecordService } from '../../../../service/diagonal-record/diagonal-record.service';

@Component({
  selector: 'app-diagonal-record-detail',
  templateUrl: './diagonal-record-detail.component.html',
  styles: [
  ]
})
export class DiagonalRecordDetailComponent extends ReportDetailComponent implements OnInit {

  constructor(public diagonalRecordService: DiagonalRecordService,
              public router: Router, public activatedRoute: ActivatedRoute) {
    super(diagonalRecordService, router, activatedRoute, diagonalRecordService.detailPropertys, 'diagonalRecord');
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

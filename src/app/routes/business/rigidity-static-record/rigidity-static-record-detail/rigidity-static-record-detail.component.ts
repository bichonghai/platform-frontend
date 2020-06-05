import { Component, OnInit } from '@angular/core';
import { ReportDetailComponent } from '../../../common/component/report-detail-component';
import { ActivatedRoute, Router } from '@angular/router';
import { zip } from 'rxjs';
import { RigidityStaticRecordService } from '../../../../service/rigidity-static-record/rigidity-static-record.service';

@Component({
  selector: 'app-rigidity-static-record-detail',
  templateUrl: './rigidity-static-record-detail.component.html',
  styles: [],
})
export class RigidityStaticRecordDetailComponent extends ReportDetailComponent implements OnInit {

  constructor(public rigidityStaticRecordService: RigidityStaticRecordService,
              public router: Router, public activatedRoute: ActivatedRoute) {
    super(rigidityStaticRecordService, router, activatedRoute, rigidityStaticRecordService.detailPropertys, 'rigidityStaticRecord');
  }

  detail(): void {
    zip(this.commonService.detailJsonObject(this.uuid)).subscribe(([detailData]) => {
      this.commonService.responseWrapperProcess(detailData, (successData: any[]) => {
        this.detailPropertys.forEach(key => {
          if (key === 'deviceRecordUuid') {
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: successData['deviceRecordShow'] });
          }else if (key === 'workingConditions') {
            const workingConditions: any[] = successData['workingConditions'];
            const data = {
              label: ['workingCondition'],
              value: workingConditions,
            };
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: data });
            console.log({ label: this.i18nPrefix + '.' + key, value: data });
          } else if (key === 'workingDetails') {
            const workingDetails: any[] = successData['workingDetails'];
            const data = {
              label: ['number', 'point', 'leftValue', 'rightValue', 'leftDifference', 'rightDifference'],
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

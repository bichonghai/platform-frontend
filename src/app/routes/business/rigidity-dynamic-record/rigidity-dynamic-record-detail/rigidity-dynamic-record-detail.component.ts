import { Component, OnInit } from '@angular/core';
import { ReportDetailComponent } from '../../../common/component/report-detail-component';
import { ActivatedRoute, Router } from '@angular/router';
import { zip } from 'rxjs';
import { RigidityDynamicRecordService } from '../../../../service/rigidity-dynamic-record/rigidity-dynamic-record.service';

@Component({
  selector: 'app-rigidity-dynamic-record-detail',
  templateUrl: './rigidity-dynamic-record-detail.component.html',
  styles: [
  ]
})
export class RigidityDynamicRecordDetailComponent extends ReportDetailComponent implements OnInit {

  constructor(public rigidityDynamicRecordService: RigidityDynamicRecordService,
              public router: Router, public activatedRoute: ActivatedRoute) {
    super(rigidityDynamicRecordService, router, activatedRoute, rigidityDynamicRecordService.detailPropertys, 'rigidityDynamicRecord');
  }

  detail(): void {
    zip(this.commonService.detailJsonObject(this.uuid)).subscribe(([thicknessdData]) => {
      this.commonService.responseWrapperProcess(thicknessdData, (successData: any[]) => {
        this.detailPropertys.forEach(key => {
          if (key === 'deviceRecordUuid') {
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: successData['deviceRecordShow'] });
          } else if (key === 'workingConditions') {
            const workingConditions: any[] = successData['workingConditions'];
            const data = {
              label: ['workingCondition'],
              value: workingConditions,
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


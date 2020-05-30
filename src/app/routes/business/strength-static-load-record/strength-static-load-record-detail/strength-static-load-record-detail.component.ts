import { Component, OnInit } from '@angular/core';
import { ReportDetailComponent } from '../../../common/component/report-detail-component';
import { ActivatedRoute, Router } from '@angular/router';
import { zip } from 'rxjs';
import { StrengthStaticLoadRecordService } from '../../../../service/strength-static-load-record/strength-static-load-record.service';

@Component({
  selector: 'app-strength-static-load-record-detail',
  templateUrl: './strength-static-load-record-detail.component.html',
  styles: [],
})
export class StrengthStaticLoadRecordDetailComponent extends ReportDetailComponent implements OnInit {

  constructor(public strengthStaticLoadRecordService: StrengthStaticLoadRecordService,
              public router: Router, public activatedRoute: ActivatedRoute) {
    super(strengthStaticLoadRecordService, router, activatedRoute, strengthStaticLoadRecordService.detailPropertys, 'strengthStaticLoadRecord');
  }

  detail(): void {
    zip(this.commonService.detailJsonObject(this.uuid)).subscribe(([thicknessdData]) => {
      this.commonService.responseWrapperProcess(thicknessdData, (successData: any[]) => {
        this.detailPropertys.forEach(key => {
          if (key === 'deviceRecordUuid') {
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: successData['deviceRecordShow'] });
          } else if (key === 'workingDetails') {
            const workingDetails: any[] = successData['workingDetails'];
            const data = {
              label: ['workingDetail'],
              value: workingDetails,
            };
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: data });
          } else if (key === 'itemDetails') {
            const itemDetails: any[] = successData['itemDetails'];
            const data = {
              label: ['channel', 'eid', 'number', 'position', 'description'],
              value: itemDetails,
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


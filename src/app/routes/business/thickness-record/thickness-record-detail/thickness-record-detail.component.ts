import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThicknessRecordService } from '../../../../service/thickness-record/thickness-record.service';
import { ReportDetailComponent } from '../../../common/component/report-detail-component';
import { ResponseWrapper } from '../../../common/dto/response-wrapper';

@Component({
  selector: 'app-thickness-record-detail',
  templateUrl: './thickness-record-detail.component.html',
  styles: [
  ]
})
export class ThicknessRecordDetailComponent extends ReportDetailComponent implements OnInit {

  constructor(public thicknessRecordService: ThicknessRecordService,  public router: Router, public activatedRoute: ActivatedRoute) {
    super(thicknessRecordService, router, activatedRoute, thicknessRecordService.detailPropertys, 'thicknessRecord');
  }
  detail(): void {
    this.commonService.detailJsonObject(this.uuid).subscribe((v: ResponseWrapper) => {
      this.commonService.responseWrapperProcess(v, (successData) => {
        this.detailPropertys.forEach(key => {
          if (key === 'deviceRecordUuid') {
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: successData['deviceRecordShow'] });
          }else   if (key === 'thicknessSectionPositionRecordUuid') {
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: successData['thicknessSectionPositionRecordShow'] });
          }else{
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: successData[key] });
          }
        });
      }, (failureData) => {

      });

    });
  }
}

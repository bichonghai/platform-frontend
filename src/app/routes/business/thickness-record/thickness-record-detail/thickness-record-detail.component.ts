import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThicknessRecordService } from '../../../../service/thickness-record/thickness-record.service';
import { ReportDetailComponent } from '../../../common/component/report-detail-component';
import { ResponseWrapper } from '../../../common/dto/response-wrapper';
import { zip } from 'rxjs';
import { ThicknessSectionPositionService } from '../../../../service/thickness-section-position/thickness-section-position.service';
import { SFSelectWidgetSchema } from '@delon/form';

@Component({
  selector: 'app-thickness-record-detail',
  templateUrl: './thickness-record-detail.component.html',
  styles: [],
})
export class ThicknessRecordDetailComponent extends ReportDetailComponent implements OnInit {

  constructor(public thicknessRecordService: ThicknessRecordService, public thicknessSectionPositionService: ThicknessSectionPositionService,
              public router: Router, public activatedRoute: ActivatedRoute) {
    super(thicknessRecordService, router, activatedRoute, thicknessRecordService.detailPropertys, 'thicknessRecord');
  }

  detail(): void {
    zip(this.commonService.detailJsonObject(this.uuid), this.thicknessSectionPositionService.listAll()).subscribe(([thicknessdData, thicknessSectionPositionData]) => {
      this.commonService.responseWrapperProcess(thicknessdData, (successData: any[]) => {
        this.detailPropertys.forEach(key => {
          if (key === 'deviceRecordUuid') {
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: successData['deviceRecordShow'] });
          } else if (key === 'thicknessDetails') {
            const thicknessDetails: any[] = successData['thicknessDetails'];
            const data = {
              label: ['thicknessSectionPositionRecordShow', 'thickness', 'paint', 'rust'],
              value: thicknessDetails,
            };
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: data });
          } else {
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: successData[key] });
          }
        });
      }, (failData) => {

      });
      this.commonService.responseWrapperProcess(thicknessSectionPositionData, (successData: any[]) => {

      }, (failData) => {

      });
    });
  }
}

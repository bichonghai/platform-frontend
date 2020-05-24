import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThicknessRecordService } from '../../../../service/thickness-record/thickness-record.service';
import { ReportDetailComponent } from '../../../common/component/report-detail-component';

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
}

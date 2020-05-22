import { Component, OnInit } from '@angular/core';
import { DetailComponent } from '../../../common/component/detail-component';
import { ActivatedRoute, Router } from '@angular/router';
import { InstrumentRecordService } from '../../../../service/instrument-record/instrument-record.service';

@Component({
  selector: 'app-instrument-record-detail',
  templateUrl: './instrument-record-detail.component.html',
  styles: [
  ]
})
export class InstrumentRecordDetailComponent  extends DetailComponent implements OnInit {

  constructor(public instrumentRecordService: InstrumentRecordService, public router: Router, public activatedRoute: ActivatedRoute) {
    super(instrumentRecordService, router, activatedRoute, instrumentRecordService.detailPropertys, 'instrumentRecord');
  }
}

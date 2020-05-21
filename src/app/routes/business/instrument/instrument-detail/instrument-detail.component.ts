import { Component, OnInit } from '@angular/core';
import { DetailComponent } from '../../../common/component/detail-component';
import { ActivatedRoute, Router } from '@angular/router';
import { InstrumentService } from '../../../../service/instrument/instrument.service';

@Component({
  selector: 'app-instrument-detail',
  templateUrl: './instrument-detail.component.html',
  styles: [
  ]
})
export class InstrumentDetailComponent  extends DetailComponent implements OnInit {

  constructor(public  instrumentService:InstrumentService,  public router: Router,   public activatedRoute: ActivatedRoute) {
    super(instrumentService,router,activatedRoute,instrumentService.detailPropertys,"instrument");
  }
}

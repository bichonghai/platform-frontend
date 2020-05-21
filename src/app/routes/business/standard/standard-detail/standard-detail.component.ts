import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailComponent } from '../../../common/component/detail-component';
import { StandardService } from '../../../../service/standard/standard.service';

@Component({
  selector: 'app-standard-detail',
  templateUrl: './standard-detail.component.html',
  styles: [],
})
export class StandardDetailComponent extends DetailComponent implements OnInit {

  constructor(public  standardService: StandardService, public router: Router, public activatedRoute: ActivatedRoute) {
    super(standardService, router, activatedRoute, standardService.detailPropertys, 'instrument');
  }
}

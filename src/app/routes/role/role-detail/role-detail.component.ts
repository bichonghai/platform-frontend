import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailComponent } from '../../common/component/detail-component';
import { RoleService } from '../../../service/role/role.service';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styles: [
  ]
})
export class RoleDetailComponent extends DetailComponent implements OnInit {
  constructor(public  roleService:RoleService,  public router: Router,   public activatedRoute: ActivatedRoute) {
    super(roleService,router,activatedRoute,roleService.detailPropertys,"role");
  }
}

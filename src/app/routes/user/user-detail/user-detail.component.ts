import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailComponent } from '../../common/component/detail-component';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styles: [
  ]
})
export class UserDetailComponent extends DetailComponent implements OnInit {
  constructor(public  userService:UserService,  public router: Router,   public activatedRoute: ActivatedRoute) {
   super(userService,router,activatedRoute,userService.detailPropertys,"user");
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { SharedModule } from '@shared';
import { LayoutModule } from '../../layout/layout.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
@NgModule({
  declarations: [UserListComponent, UserEditComponent, UserDetailComponent],
  imports: [
    SharedModule,
    CommonModule,
    LayoutModule,
    UserRoutingModule
  ]
})
export class UserModule { }

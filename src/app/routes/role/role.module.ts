import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { LayoutModule } from '../../layout/layout.module';
import { SharedModule } from '@shared';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTreeModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [RoleListComponent, RoleEditComponent, RoleDetailComponent],
  imports: [
    SharedModule,
    CommonModule,
    NzTreeModule,
    LayoutModule,
    ReactiveFormsModule,
    RoleRoutingModule
  ]
})
export class RoleModule { }

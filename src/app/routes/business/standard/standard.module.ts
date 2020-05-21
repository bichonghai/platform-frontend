import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandardRoutingModule } from './standard-routing.module';
import { StandardListComponent } from './standard-list/standard-list.component';
import { StandardEditComponent } from './standard-edit/standard-edit.component';
import { StandardDetailComponent } from './standard-detail/standard-detail.component';
import { SharedModule } from '../../../shared';
import { LayoutModule } from '../../../layout/layout.module';


@NgModule({
  declarations: [StandardListComponent, StandardEditComponent, StandardDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    StandardRoutingModule
  ]
})
export class StandardModule { }

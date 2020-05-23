import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThicknessSectionPositionRoutingModule } from './thickness-section-position-routing.module';
import { ThicknessSectionPositionListComponent } from './thickness-section-position-list/thickness-section-position-list.component';
import { ThicknessSectionPositionEditComponent } from './thickness-section-position-edit/thickness-section-position-edit.component';
import { SharedModule } from '../../../shared';
import { LayoutModule } from '../../../layout/layout.module';


@NgModule({
  declarations: [ThicknessSectionPositionListComponent, ThicknessSectionPositionEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    ThicknessSectionPositionRoutingModule
  ]
})
export class ThicknessSectionPositionModule { }

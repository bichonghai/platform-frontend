import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamePositionDifferenceRecordRoutingModule } from './same-position-difference-record-routing.module';
import { SamePositionDifferenceRecordListComponent } from './same-position-difference-record-list/same-position-difference-record-list.component';
import { SamePositionDifferenceRecordEditComponent } from './same-position-difference-record-edit/same-position-difference-record-edit.component';
import { SamePositionDifferenceRecordDetailComponent } from './same-position-difference-record-detail/same-position-difference-record-detail.component';
import { SharedModule } from '../../../shared';
import { LayoutModule } from '../../../layout/layout.module';
import { CommonBusinessModule } from '../common-business/common-business.module';


@NgModule({
  declarations: [SamePositionDifferenceRecordListComponent, SamePositionDifferenceRecordEditComponent, SamePositionDifferenceRecordDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    CommonBusinessModule,
    SamePositionDifferenceRecordRoutingModule
  ]
})
export class SamePositionDifferenceRecordModule { }

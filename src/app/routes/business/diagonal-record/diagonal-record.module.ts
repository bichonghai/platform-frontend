import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiagonalRecordRoutingModule } from './diagonal-record-routing.module';
import { DiagonalRecordListComponent } from './diagonal-record-list/diagonal-record-list.component';
import { DiagonalRecordEditComponent } from './diagonal-record-edit/diagonal-record-edit.component';
import { DiagonalRecordDetailComponent } from './diagonal-record-detail/diagonal-record-detail.component';
import { SharedModule } from '../../../shared';
import { LayoutModule } from '../../../layout/layout.module';
import { CommonBusinessModule } from '../common-business/common-business.module';


@NgModule({
  declarations: [DiagonalRecordListComponent, DiagonalRecordEditComponent, DiagonalRecordDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    CommonBusinessModule,
    DiagonalRecordRoutingModule
  ]
})
export class DiagonalRecordModule { }

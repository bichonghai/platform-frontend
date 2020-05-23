import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThicknessRecordRoutingModule } from './thickness-record-routing.module';
import { ThicknessRecordListComponent } from './thickness-record-list/thickness-record-list.component';
import { ThicknessRecordEditComponent } from './thickness-record-edit/thickness-record-edit.component';
import { ThicknessRecordDetailComponent } from './thickness-record-detail/thickness-record-detail.component';
import { SharedModule } from '../../../shared';
import { LayoutModule } from '../../../layout/layout.module';


@NgModule({
  declarations: [ThicknessRecordListComponent, ThicknessRecordEditComponent, ThicknessRecordDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    ThicknessRecordRoutingModule
  ]
})
export class ThicknessRecordModule { }
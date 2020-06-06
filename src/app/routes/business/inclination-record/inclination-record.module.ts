import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InclinationRecordRoutingModule } from './inclination-record-routing.module';
import { InclinationRecordListComponent } from './inclination-record-list/inclination-record-list.component';
import { InclinationRecordEditComponent } from './inclination-record-edit/inclination-record-edit.component';
import { InclinationRecordDetailComponent } from './inclination-record-detail/inclination-record-detail.component';
import { SharedModule } from '../../../shared';
import { LayoutModule } from '../../../layout/layout.module';
import { CommonBusinessModule } from '../common-business/common-business.module';


@NgModule({
  declarations: [InclinationRecordListComponent, InclinationRecordEditComponent, InclinationRecordDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    CommonBusinessModule,
    InclinationRecordRoutingModule
  ]
})
export class InclinationRecordModule { }

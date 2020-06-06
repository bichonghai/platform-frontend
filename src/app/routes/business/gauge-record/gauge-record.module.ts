import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaugeRecordRoutingModule } from './gauge-record-routing.module';
import { GaugeRecordListComponent } from './gauge-record-list/gauge-record-list.component';
import { GaugeRecordEditComponent } from './gauge-record-edit/gauge-record-edit.component';
import { GaugeRecordDetailComponent } from './gauge-record-detail/gauge-record-detail.component';
import { SharedModule } from '../../../shared';
import { LayoutModule } from '../../../layout/layout.module';
import { CommonBusinessModule } from '../common-business/common-business.module';


@NgModule({
  declarations: [GaugeRecordListComponent, GaugeRecordEditComponent, GaugeRecordDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    CommonBusinessModule,
    GaugeRecordRoutingModule
  ]
})
export class GaugeRecordModule { }

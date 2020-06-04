import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeightGaugeRecordRoutingModule } from './height-gauge-record-routing.module';
import { HeightGaugeRecordListComponent } from './height-gauge-record-list/height-gauge-record-list.component';
import { HeightGaugeRecordEditComponent } from './height-gauge-record-edit/height-gauge-record-edit.component';
import { HeightGaugeRecordDetailComponent } from './height-gauge-record-detail/height-gauge-record-detail.component';
import { SharedModule } from '../../../shared';
import { LayoutModule } from '../../../layout/layout.module';
import { CommonBusinessModule } from '../common-business/common-business.module';


@NgModule({
  declarations: [HeightGaugeRecordListComponent, HeightGaugeRecordEditComponent, HeightGaugeRecordDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    CommonBusinessModule,
    HeightGaugeRecordRoutingModule
  ]
})
export class HeightGaugeRecordModule { }

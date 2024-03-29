import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrumentRecordRoutingModule } from './instrument-record-routing.module';
import { InstrumentRecordListComponent } from './instrument-record-list/instrument-record-list.component';
import { InstrumentRecordEditComponent } from './instrument-record-edit/instrument-record-edit.component';
import { InstrumentRecordDetailComponent } from './instrument-record-detail/instrument-record-detail.component';
import { SharedModule } from '../../../shared';
import { LayoutModule } from '../../../layout/layout.module';
import { InstrumentRecordListCommonModule } from '../instrument-record-list-common/instrument-record-list-common.module';


@NgModule({
  declarations: [InstrumentRecordListComponent, InstrumentRecordEditComponent, InstrumentRecordDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    InstrumentRecordListCommonModule,
    InstrumentRecordRoutingModule,
  ],
  exports: [],
})
export class InstrumentRecordModule {
}

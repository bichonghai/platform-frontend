import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstrumentRecordListCommonComponent } from './instrument-record-list-common/instrument-record-list-common.component';
import { SharedModule } from '@shared';
import { LayoutModule } from '../../../layout/layout.module';


@NgModule({
  declarations: [InstrumentRecordListCommonComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
  ],
  exports: [InstrumentRecordListCommonComponent],
})
export class InstrumentRecordListCommonModule {
}

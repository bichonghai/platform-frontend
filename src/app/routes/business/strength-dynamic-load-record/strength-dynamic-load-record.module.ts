import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrengthDynamicLoadRecordRoutingModule } from './strength-dynamic-load-record-routing.module';
import { StrengthDynamicLoadRecordListComponent } from './strength-dynamic-load-record-list/strength-dynamic-load-record-list.component';
import { StrengthDynamicLoadRecordEditComponent } from './strength-dynamic-load-record-edit/strength-dynamic-load-record-edit.component';
import { StrengthDynamicLoadRecordDetailComponent } from './strength-dynamic-load-record-detail/strength-dynamic-load-record-detail.component';
import { SharedModule } from '../../../shared';
import { LayoutModule } from '../../../layout/layout.module';
import { CommonBusinessModule } from '../common-business/common-business.module';
import { InstrumentRecordListCommonModule } from '../instrument-record-list-common/instrument-record-list-common.module';


@NgModule({
  declarations: [StrengthDynamicLoadRecordListComponent, StrengthDynamicLoadRecordEditComponent, StrengthDynamicLoadRecordDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    CommonBusinessModule,
    InstrumentRecordListCommonModule,
    StrengthDynamicLoadRecordRoutingModule
  ]
})
export class StrengthDynamicLoadRecordModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrengthStaticLoadRecordRoutingModule } from './strength-static-load-record-routing.module';
import { StrengthStaticLoadRecordListComponent } from './strength-static-load-record-list/strength-static-load-record-list.component';
import { StrengthStaticLoadRecordEditComponent } from './strength-static-load-record-edit/strength-static-load-record-edit.component';
import { StrengthStaticLoadRecordDetailComponent } from './strength-static-load-record-detail/strength-static-load-record-detail.component';
import { SharedModule } from '@shared';
import { LayoutModule } from '../../../layout/layout.module';
import { CommonBusinessModule } from '../common-business/common-business.module';
import { InstrumentRecordListCommonModule } from '../instrument-record-list-common/instrument-record-list-common.module';


@NgModule({
  declarations: [StrengthStaticLoadRecordListComponent, StrengthStaticLoadRecordEditComponent, StrengthStaticLoadRecordDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    CommonBusinessModule,
    InstrumentRecordListCommonModule,
    StrengthStaticLoadRecordRoutingModule
  ]
})
export class StrengthStaticLoadRecordModule { }

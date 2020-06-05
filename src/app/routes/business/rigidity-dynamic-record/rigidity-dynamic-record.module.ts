import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RigidityDynamicRecordRoutingModule } from './rigidity-dynamic-record-routing.module';
import { RigidityDynamicRecordListComponent } from './rigidity-dynamic-record-list/rigidity-dynamic-record-list.component';
import { RigidityDynamicRecordEditComponent } from './rigidity-dynamic-record-edit/rigidity-dynamic-record-edit.component';
import { RigidityDynamicRecordDetailComponent } from './rigidity-dynamic-record-detail/rigidity-dynamic-record-detail.component';
import { SharedModule } from '../../../shared';
import { LayoutModule } from '../../../layout/layout.module';
import { CommonBusinessModule } from '../common-business/common-business.module';


@NgModule({
  declarations: [RigidityDynamicRecordListComponent, RigidityDynamicRecordEditComponent, RigidityDynamicRecordDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    CommonBusinessModule,
    RigidityDynamicRecordRoutingModule
  ]
})
export class RigidityDynamicRecordModule { }

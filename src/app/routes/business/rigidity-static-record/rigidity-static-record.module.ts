import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RigidityStaticRecordRoutingModule } from './rigidity-static-record-routing.module';
import { RigidityStaticRecordListComponent } from './rigidity-static-record-list/rigidity-static-record-list.component';
import { RigidityStaticRecordEditComponent } from './rigidity-static-record-edit/rigidity-static-record-edit.component';
import { RigidityStaticRecordDetailComponent } from './rigidity-static-record-detail/rigidity-static-record-detail.component';
import { SharedModule } from '../../../shared';
import { LayoutModule } from '../../../layout/layout.module';
import { CommonBusinessModule } from '../common-business/common-business.module';


@NgModule({
  declarations: [RigidityStaticRecordListComponent, RigidityStaticRecordEditComponent, RigidityStaticRecordDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    CommonBusinessModule,
    RigidityStaticRecordRoutingModule
  ]
})
export class RigidityStaticRecordModule { }

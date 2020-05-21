import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRecordRoutingModule } from './device-record-routing.module';
import { DeviceRecordListComponent } from './device-record-list/device-record-list.component';
import { DeviceRecordEditComponent } from './device-record-edit/device-record-edit.component';
import { DeviceRecordDetailComponent } from './device-record-detail/device-record-detail.component';
import { SharedModule } from '@shared';
import { LayoutModule } from '../../../layout/layout.module';


@NgModule({
  declarations: [DeviceRecordListComponent, DeviceRecordEditComponent, DeviceRecordDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    DeviceRecordRoutingModule
  ]
})
export class DeviceRecordModule { }

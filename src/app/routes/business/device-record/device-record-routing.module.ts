import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceRecordDetailComponent } from './device-record-detail/device-record-detail.component';
import { DeviceRecordListComponent } from './device-record-list/device-record-list.component';
import { DeviceRecordEditComponent } from './device-record-edit/device-record-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/business/device-record/list', pathMatch: 'full' },
  { path: 'list', component: DeviceRecordListComponent, data: { title18n: 'menu.operator.list' } },
  { path: 'detail', component: DeviceRecordDetailComponent, data: { title18n: 'menu.operator.detail' } },
  {
    path: 'edit',
    canActivate: [],
    component: DeviceRecordEditComponent,
    data: { title18n: 'menu.operator.edit', guard: 'deviceRecord:edit' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRecordRoutingModule { }

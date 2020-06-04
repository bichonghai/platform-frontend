import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeightGaugeRecordListComponent } from './height-gauge-record-list/height-gauge-record-list.component';
import { HeightGaugeRecordDetailComponent } from './height-gauge-record-detail/height-gauge-record-detail.component';
import { HeightGaugeRecordEditComponent } from './height-gauge-record-edit/height-gauge-record-edit.component';



const routes: Routes = [
  { path: '', redirectTo: '/business/height-gauge-record/list', pathMatch: 'full' },
  { path: 'list', component: HeightGaugeRecordListComponent, data: { title18n: 'menu.operator.list' } },
  { path: 'detail', component: HeightGaugeRecordDetailComponent, data: { title18n: 'menu.operator.detail' } },
  {
    path: 'edit',
    canActivate: [],
    component: HeightGaugeRecordEditComponent,
    data: { title18n: 'menu.operator.edit', guard: 'heightGaugeRecord:edit' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeightGaugeRecordRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaugeRecordListComponent } from './gauge-record-list/gauge-record-list.component';
import { GaugeRecordDetailComponent } from './gauge-record-detail/gauge-record-detail.component';
import { GaugeRecordEditComponent } from './gauge-record-edit/gauge-record-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/business/gauge-record/list', pathMatch: 'full' },
  { path: 'list', component: GaugeRecordListComponent
    , data: { title18n: 'menu.operator.list' } },
  { path: 'detail', component: GaugeRecordDetailComponent, data: { title18n: 'menu.operator.detail' } },
  {
    path: 'edit',
    canActivate: [],
    component: GaugeRecordEditComponent,
    data: { title18n: 'menu.operator.edit', guard: 'gaugeRecord:edit' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaugeRecordRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentRecordEditComponent } from './instrument-record-edit/instrument-record-edit.component';
import { InstrumentRecordListComponent } from './instrument-record-list/instrument-record-list.component';
import { InstrumentRecordDetailComponent } from './instrument-record-detail/instrument-record-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/business/instrument-record/list', pathMatch: 'full' },
  { path: 'list', component: InstrumentRecordListComponent, data: { title18n: 'menu.operator.list' } },
  { path: 'detail', component: InstrumentRecordDetailComponent, data: { title18n: 'menu.operator.detail' } },
  {
    path: 'edit',
    canActivate: [],
    component: InstrumentRecordEditComponent,
    data: { title18n: 'menu.operator.edit', guard: 'instrumentRecord:edit' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrumentRecordRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InclinationRecordListComponent } from './inclination-record-list/inclination-record-list.component';
import { InclinationRecordDetailComponent } from './inclination-record-detail/inclination-record-detail.component';
import { InclinationRecordEditComponent } from './inclination-record-edit/inclination-record-edit.component';



const routes: Routes = [
  { path: '', redirectTo: '/business/inclination-record/list', pathMatch: 'full' },
  { path: 'list', component: InclinationRecordListComponent, data: { title18n: 'menu.operator.list' } },
  { path: 'detail', component: InclinationRecordDetailComponent, data: { title18n: 'menu.operator.detail' } },
  {
    path: 'edit',
    canActivate: [],
    component: InclinationRecordEditComponent,
    data: { title18n: 'menu.operator.edit', guard: 'inclinationRecord:edit' },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InclinationRecordRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamePositionDifferenceRecordDetailComponent } from './same-position-difference-record-detail/same-position-difference-record-detail.component';
import { SamePositionDifferenceRecordEditComponent } from './same-position-difference-record-edit/same-position-difference-record-edit.component';
import { SamePositionDifferenceRecordListComponent } from './same-position-difference-record-list/same-position-difference-record-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/business/same-position-difference-record/list', pathMatch: 'full' },
  { path: 'list', component: SamePositionDifferenceRecordListComponent, data: { title18n: 'menu.operator.list' } },
  { path: 'detail', component: SamePositionDifferenceRecordDetailComponent, data: { title18n: 'menu.operator.detail' } },
  {
    path: 'edit',
    canActivate: [],
    component: SamePositionDifferenceRecordEditComponent,
    data: { title18n: 'menu.operator.edit', guard: 'samePositionDifferenceRecord:edit' },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamePositionDifferenceRecordRoutingModule { }

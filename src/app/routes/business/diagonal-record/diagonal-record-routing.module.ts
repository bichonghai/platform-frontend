import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagonalRecordListComponent } from './diagonal-record-list/diagonal-record-list.component';
import { DiagonalRecordDetailComponent } from './diagonal-record-detail/diagonal-record-detail.component';
import { DiagonalRecordEditComponent } from './diagonal-record-edit/diagonal-record-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/business/diagonal-record/list', pathMatch: 'full' },
  { path: 'list', component: DiagonalRecordListComponent, data: { title18n: 'menu.operator.list' } },
  { path: 'detail', component: DiagonalRecordDetailComponent, data: { title18n: 'menu.operator.detail' } },
  {
    path: 'edit',
    canActivate: [],
    component: DiagonalRecordEditComponent,
    data: { title18n: 'menu.operator.edit', guard: 'diagonalRecord:edit' },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagonalRecordRoutingModule { }

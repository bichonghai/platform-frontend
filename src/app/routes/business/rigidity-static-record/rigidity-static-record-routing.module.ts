import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RigidityStaticRecordListComponent } from './rigidity-static-record-list/rigidity-static-record-list.component';
import { RigidityStaticRecordDetailComponent } from './rigidity-static-record-detail/rigidity-static-record-detail.component';
import { RigidityStaticRecordEditComponent } from './rigidity-static-record-edit/rigidity-static-record-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/business/rigidity-static-record/list', pathMatch: 'full' },
  { path: 'list', component: RigidityStaticRecordListComponent, data: { title18n: 'menu.operator.list' } },
  { path: 'detail', component: RigidityStaticRecordDetailComponent, data: { title18n: 'menu.operator.detail' } },
  {
    path: 'edit',
    canActivate: [],
    component: RigidityStaticRecordEditComponent,
    data: { title18n: 'menu.operator.edit', guard: 'rigidityStaticRecord:edit' },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RigidityStaticRecordRoutingModule { }

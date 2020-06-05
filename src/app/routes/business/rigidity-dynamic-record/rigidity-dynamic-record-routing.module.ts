import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RigidityDynamicRecordListComponent } from './rigidity-dynamic-record-list/rigidity-dynamic-record-list.component';
import { RigidityDynamicRecordDetailComponent } from './rigidity-dynamic-record-detail/rigidity-dynamic-record-detail.component';
import { RigidityDynamicRecordEditComponent } from './rigidity-dynamic-record-edit/rigidity-dynamic-record-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/business/rigidity-dynamic-record/list', pathMatch: 'full' },
  { path: 'list', component: RigidityDynamicRecordListComponent, data: { title18n: 'menu.operator.list' } },
  { path: 'detail', component: RigidityDynamicRecordDetailComponent, data: { title18n: 'menu.operator.detail' } },
  {
    path: 'edit',
    canActivate: [],
    component: RigidityDynamicRecordEditComponent,
    data: { title18n: 'menu.operator.edit', guard: 'rigidityDynamicRecord:edit' },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RigidityDynamicRecordRoutingModule { }

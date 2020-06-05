import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StrengthDynamicLoadRecordListComponent } from './strength-dynamic-load-record-list/strength-dynamic-load-record-list.component';
import { StrengthDynamicLoadRecordEditComponent } from './strength-dynamic-load-record-edit/strength-dynamic-load-record-edit.component';
import { StrengthDynamicLoadRecordDetailComponent } from './strength-dynamic-load-record-detail/strength-dynamic-load-record-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/business/strength-dynamic-load-record/list', pathMatch: 'full' },
  { path: 'list', component: StrengthDynamicLoadRecordListComponent, data: { title18n: 'menu.operator.list' } },
  { path: 'detail', component: StrengthDynamicLoadRecordDetailComponent, data: { title18n: 'menu.operator.detail' } },
  {
    path: 'edit',
    canActivate: [],
    component: StrengthDynamicLoadRecordEditComponent,
    data: { title18n: 'menu.operator.edit', guard: 'strengthDynamicLoadRecord:edit' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrengthDynamicLoadRecordRoutingModule { }

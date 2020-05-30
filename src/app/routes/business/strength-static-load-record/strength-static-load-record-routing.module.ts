import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StrengthStaticLoadRecordListComponent } from './strength-static-load-record-list/strength-static-load-record-list.component';
import { StrengthStaticLoadRecordDetailComponent } from './strength-static-load-record-detail/strength-static-load-record-detail.component';
import { StrengthStaticLoadRecordEditComponent } from './strength-static-load-record-edit/strength-static-load-record-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/business/strength-static-load-record/list', pathMatch: 'full' },
  { path: 'list', component: StrengthStaticLoadRecordListComponent, data: { title18n: 'menu.operator.list' } },
  { path: 'detail', component: StrengthStaticLoadRecordDetailComponent, data: { title18n: 'menu.operator.detail' } },
  {
    path: 'edit',
    canActivate: [],
    component: StrengthStaticLoadRecordEditComponent,
    data: { title18n: 'menu.operator.edit', guard: 'strengthStaticLoadRecord:edit' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrengthStaticLoadRecordRoutingModule { }

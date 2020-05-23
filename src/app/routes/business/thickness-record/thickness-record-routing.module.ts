import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThicknessRecordListComponent } from './thickness-record-list/thickness-record-list.component';
import { ThicknessRecordEditComponent } from './thickness-record-edit/thickness-record-edit.component';
import { ThicknessRecordDetailComponent } from './thickness-record-detail/thickness-record-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/business/thickness-record/list', pathMatch: 'full' },
  { path: 'list', component: ThicknessRecordListComponent, data: { title18n: 'menu.operator.list' } },
  { path: 'detail', component: ThicknessRecordDetailComponent, data: { title18n: 'menu.operator.detail' } },
  {
    path: 'edit',
    canActivate: [],
    component: ThicknessRecordEditComponent,
    data: { title18n: 'menu.operator.edit', guard: 'thicknessSectionPosition:edit' },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThicknessRecordRoutingModule { }

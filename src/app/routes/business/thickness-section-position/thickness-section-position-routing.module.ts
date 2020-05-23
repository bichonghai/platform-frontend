import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThicknessSectionPositionListComponent } from './thickness-section-position-list/thickness-section-position-list.component';
import { ThicknessSectionPositionEditComponent } from './thickness-section-position-edit/thickness-section-position-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/business/thickness-section-position/list', pathMatch: 'full' },
  { path: 'list', component: ThicknessSectionPositionListComponent, data: { title18n: 'menu.operator.list' } },
  {
    path: 'edit',
    canActivate: [],
    component: ThicknessSectionPositionEditComponent,
    data: { title18n: 'menu.operator.edit', guard: 'thicknessSectionPosition:edit' },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThicknessSectionPositionRoutingModule { }

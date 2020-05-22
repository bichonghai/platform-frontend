import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/business/project/list', pathMatch: 'full' },
  { path: 'list', component: ProjectListComponent, data: { title18n: 'menu.operator.list' } },
  { path: 'detail', component: ProjectDetailComponent, data: { title18n: 'menu.operator.detail' } },
  {
    path: 'edit',
    canActivate: [],
    component: ProjectEditComponent,
    data: { title18n: 'menu.operator.edit', guard: 'instrument:edit' },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }

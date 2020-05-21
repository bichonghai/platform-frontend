import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { RoleEditComponent } from './role-edit/role-edit.component';
import { RoleListComponent } from './role-list/role-list.component';
import { ACLGuard } from '@delon/acl';


const routes: Routes = [
  { path: '', redirectTo: '/role/list', pathMatch: 'full' },
  { path: 'list', component: RoleListComponent, data: { title18n: 'menu.operator.list' } },
  { path: 'detail', component: RoleDetailComponent, data: { title18n: 'menu.operator.detail' } },
  {
    path: 'edit',
    canActivate: [ACLGuard],
    component: RoleEditComponent,
    data: { title18n: 'menu.operator.edit', guard: 'role:edit' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ACLGuard } from '@delon/acl';
import { UserCenterComponent } from './user-center/user-center.component';


const routes: Routes = [
  { path: '', redirectTo: '/security/user/list', pathMatch: 'full' },
  { path: 'list', canActivate: [ACLGuard], component: UserListComponent, data: { title18n: 'menu.operator.list' } },
  {
    path: 'detail',
    canActivate: [ACLGuard],
    component: UserDetailComponent,
    data: { title18n: 'menu.operator.detail' },
  },
  {
    path: 'edit',
    canActivate: [ACLGuard],
    component: UserEditComponent,
    data: { title18n: 'menu.operator.edit', guard: 'user:edit' },
  },
  {
    path: 'center',
    canActivate: [],
    component: UserCenterComponent,
    data: { title18n: 'menu.center' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutDefaultComponent } from '../../layout/default/default.component';
import { ACLGuard } from '@delon/acl';
import { SimpleGuard } from '@delon/auth';


const routes: Routes = [
  {
    path: 'user',
    canActivate: [ACLGuard, SimpleGuard],
    data: { guard: 'user' },
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    path: 'role',
    canActivate: [ACLGuard, SimpleGuard],
    data: { guard: 'role' },
    loadChildren: () => import('./role/role.module').then(m => m.RoleModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }

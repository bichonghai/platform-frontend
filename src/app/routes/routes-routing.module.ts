import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleGuard } from '@delon/auth';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { UserLockComponent } from './passport/lock/lock.component';
import { ACLGuard } from '@delon/acl';
import { UserCenterComponent } from './security/user/user-center/user-center.component';
import { DingTalkComponent } from './passport/ding-talk/ding-talk.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    canActivate: [ACLGuard, SimpleGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, data: { title: '仪表盘' } },
      { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
      // 业务子模块
      // { path: 'widgets', loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule) },
    ],
  },
  {
    path: 'security',
    component: LayoutDefaultComponent,
    canActivate: [ACLGuard, SimpleGuard],
    loadChildren: () => import('./security/security.module').then(m => m.SecurityModule),
  },
  {
    path: 'business',
    component: LayoutDefaultComponent,
    canActivate: [ACLGuard, SimpleGuard],
    loadChildren: () => import('./business/business.module').then(m => m.BusinessModule),
  },
  // 全屏布局
  // {
  //     path: 'fullscreen',
  //     component: LayoutFullScreenComponent,
  //     children: [
  //     ]
  // },
  // passport
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      { path: 'login', component: UserLoginComponent, data: { title: '登录' } },
      { path: 'ding-talk', component: DingTalkComponent, data: { title: '钉钉登录' } },
      { path: 'center', component: UserCenterComponent, data: { title: '用户中心' } },
      { path: 'register-result', component: UserRegisterResultComponent, data: { title: '注册结果' } },
      { path: 'lock', component: UserLockComponent, data: { title: '锁屏' } },
    ],
  },
  // 单页不包裹Layout
  { path: 'callback/:type', component: CallbackComponent },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
        useHash: environment.useHash,
        // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
        // Pls refer to https://ng-alain.com/components/reuse-tab
        scrollPositionRestoration: 'top',
      },
    )],
  exports: [RouterModule],
})
export class RouteRoutingModule {
}

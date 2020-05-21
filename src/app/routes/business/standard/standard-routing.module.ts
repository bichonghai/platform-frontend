import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandardListComponent } from '../standard/standard-list/standard-list.component';
import { StandardDetailComponent } from '../standard/standard-detail/standard-detail.component';
import { StandardEditComponent } from '../standard/standard-edit/standard-edit.component';


const routes: Routes = [
  {path: '',redirectTo:"/business/standard/list",pathMatch: 'full'},
  {path: 'list',component:StandardListComponent,data:{title18n:"menu.operator.list"}},
  {path: 'detail',component:StandardDetailComponent,data:{title18n:"menu.operator.detail"}},
  {path: 'edit', canActivate: [],component:StandardEditComponent,data:{title18n:"menu.operator.edit",guard: 'standard:edit'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardRoutingModule { }

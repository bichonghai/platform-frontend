import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentDetailComponent } from './instrument-detail/instrument-detail.component';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import { InstrumentEditComponent } from './instrument-edit/instrument-edit.component';


const routes: Routes = [
  {path: '',redirectTo:"/business/instrument/list",pathMatch: 'full'},
  {path: 'list',component:InstrumentListComponent,data:{title18n:"menu.operator.list"}},
  {path: 'detail',component:InstrumentDetailComponent,data:{title18n:"menu.operator.detail"}},
  {path: 'edit', canActivate: [],component:InstrumentEditComponent,data:{title18n:"menu.operator.edit",guard: 'instrument:edit'} }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrumentRoutingModule { }

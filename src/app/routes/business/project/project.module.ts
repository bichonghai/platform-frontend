import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { SharedModule } from '@shared';
import { LayoutModule } from '../../../layout/layout.module';


@NgModule({
  declarations: [ProjectListComponent, ProjectEditComponent, ProjectDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }

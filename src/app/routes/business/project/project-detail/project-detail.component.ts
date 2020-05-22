import { Component, OnInit } from '@angular/core';
import { DetailComponent } from '../../../common/component/detail-component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../../service/project/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styles: [
  ]
})
export class ProjectDetailComponent  extends DetailComponent implements OnInit {

  constructor(public  projectService: ProjectService, public router: Router, public activatedRoute: ActivatedRoute) {
    super(projectService, router, activatedRoute, projectService.detailPropertys, 'project');
  }
}

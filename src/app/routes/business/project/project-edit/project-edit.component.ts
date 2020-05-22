import { Component, Inject, OnInit } from '@angular/core';
import { EditComponent } from '../../../common/component/edit-component';
import { ProjectService } from '../../../../service/project/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styles: [],
})
export class ProjectEditComponent extends EditComponent implements OnInit {
  schema = {
    properties: {
      name: { type: 'string', ui: { i18n: 'project.name' }, maxLength: 50 },
      state: { type: 'string', ui: { i18n: 'project.state' }, maxLength: 50 },
      company: { type: 'string', ui: { i18n: 'project.company' }, maxLength: 50 },
    },
    required: ['name', 'company'],
    ui: {
      spanLabelFixed: 150,
      grid: { span: 24 },
    },
  };

  constructor(public projectService: ProjectService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(projectService, modal, msg, router, i18NService, activatedRoute);

  }

  ngOnInit(): void {
    this.listPropertys = ['uuid', ...this.projectService.listPropertys];
    super.ngOnInit();
  }

}

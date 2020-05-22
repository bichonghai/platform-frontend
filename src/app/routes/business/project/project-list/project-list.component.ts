import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ListComponent } from '../../../common/component/list-component';
import { ProjectService } from '../../../../service/project/project.service';
import { Router } from '@angular/router';
import { ServicePathService } from '../../../../service/service-path.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styles: [
  ]
})
export class ProjectListComponent extends ListComponent implements OnInit {
  schema = {
    properties: {
      name: { type: 'string', maxLength: 50, ui: { i18n: 'project.name' } },
      company: { type: 'string', maxLength: 50, ui: { i18n: 'project.company' } },
    },
    ui: {
      spanLabel: 8,
    },
  };

  constructor(public projectService: ProjectService, public router: Router, private servicePathService: ServicePathService,
              public cdr: ChangeDetectorRef, public modal: NzModalService, @Inject(ALAIN_I18N_TOKEN) private i18NService: I18NService) {
    super(servicePathService.project, projectService, modal, cdr, router);
    for (const entry of projectService.listPropertys) {
      this.columns.push({ title: { i18n: 'project.' + entry }, index: entry });
    }
    this.columns.push(
      {
        title: '操作',
        buttons: [
          {
            i18n: 'menu.operator.detail',
            click: (item: any) => this.detail(item),
          },
          {
            i18n: 'menu.operator.edit',
            acl: ['project:edit'],
            click: (item: any) => this.edit(item),
          },
        ]
        ,
      },
    );
  }

  ngOnInit(): void {
  }

}

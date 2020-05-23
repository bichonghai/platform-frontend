import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ListComponent } from '../../../common/component/list-component';
import { SFSelectWidgetSchema } from '@delon/form';
import { Router } from '@angular/router';
import { ServicePathService } from '../../../../service/service-path.service';
import { ProjectService } from '../../../../service/project/project.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';
import { deepCopy } from '@delon/util';
import { ThicknessRecordService } from '../../../../service/thickness-record/thickness-record.service';

@Component({
  selector: 'app-thickness-record-list',
  templateUrl: './thickness-record-list.component.html',
  styles: [
  ]
})
export class ThicknessRecordListComponent  extends ListComponent implements OnInit {
  schema = {
    properties: {
      projectUuid: {
        type: 'string',
        enum: [
          { label: '请选择项目名称', value: '' },
        ],
        default: '',
        ui: {
          i18n: 'deviceRecord.projectUuid',
          widget: 'select',
        } as SFSelectWidgetSchema,
      },
    },
    ui: {
      spanLabel: 8,
    },
  };
  initFinish = false;

  constructor(public thicknessRecordService: ThicknessRecordService, public router: Router, private servicePathService: ServicePathService,
              private projectService: ProjectService, public cdr: ChangeDetectorRef, public modal: NzModalService, @Inject(ALAIN_I18N_TOKEN) private i18NService: I18NService) {
    super(servicePathService.thicknessRecord, thicknessRecordService, modal, cdr, router);
    projectService.listAll().subscribe(v => {
      this.commonService.responseWrapperProcess(v, (successData: any[]) => {
        this.projectProcess(successData, null);
      }, (failData) => {
        this.projectProcess(null, failData);
      });
    });
  }

  projectProcess(successData, failureData) {
    this.initFinish = true;
    const projects = [{ label: '请选择项目名称', value: '' }];
    const enumProject = {};
    if (successData) {
      successData.forEach(p => {
        projects.push({ label: p['name'], value: p['uuid'] });
        enumProject[p['uuid']] = p['name'];
      });
    }
    this.schema.properties.projectUuid['enum'] = projects;
    this.schema = deepCopy(this.schema);
    for (const entry of this.thicknessRecordService.listPropertys) {
      if (entry === 'projectUuid') {
        this.columns.push({
          title: { i18n: 'thicknessRecord.' + entry }, type: 'enum', index: entry,
          enum:
          enumProject,
        });
      } else {
        this.columns.push({ title: { i18n: 'thicknessRecord.' + entry }, index: entry });
      }

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
            acl: ['thicknessRecord:edit'],
            click: (item: any) => this.edit(item),
          },
        ]
        ,
      },
    );
    this.columns = deepCopy(this.columns);
  }

  ngOnInit(): void {
  }

}

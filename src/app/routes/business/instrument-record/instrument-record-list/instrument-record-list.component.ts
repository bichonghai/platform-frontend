import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ListComponent } from '../../../common/component/list-component';
import { Router } from '@angular/router';
import { ServicePathService } from '../../../../service/service-path.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';
import { InstrumentRecordService } from '../../../../service/instrument-record/instrument-record.service';
import { deepCopy } from '@delon/util';
import { ProjectService } from '../../../../service/project/project.service';
import { SFSelectWidgetSchema } from '@delon/form';

@Component({
  selector: 'app-instrument-record-list',
  templateUrl: './instrument-record-list.component.html',
  styles: [],
})
export class InstrumentRecordListComponent extends ListComponent implements OnInit {
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
      deviceRecordName: { type: 'string', maxLength: 50, ui: { i18n: 'instrumentRecord.deviceRecordName' } },
      name: { type: 'string', maxLength: 50, ui: { i18n: 'instrumentRecord.name' } },
    },
    ui: {
      spanLabel: 8,
    },
  };
  initFinish = false;

  constructor(public instrumentRecordService: InstrumentRecordService, public router: Router, private servicePathService: ServicePathService,
              private projectService: ProjectService, public cdr: ChangeDetectorRef, public modal: NzModalService, @Inject(ALAIN_I18N_TOKEN) private i18NService: I18NService) {
    super(servicePathService.instrumentRecord, instrumentRecordService, modal, cdr, router);
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
    for (const entry of this.instrumentRecordService.listPropertys) {
      if (entry === 'projectUuid') {
        this.columns.push({
          title: { i18n: 'instrumentRecord.' + entry }, type: 'enum', index: entry,
          enum:
          enumProject,
        });
      } else {
        this.columns.push({ title: { i18n: 'instrumentRecord.' + entry }, index: entry });
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
            acl: ['instrumentRecord:edit'],
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

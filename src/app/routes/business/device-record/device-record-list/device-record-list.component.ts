import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ListComponent } from '../../../common/component/list-component';
import { StandardService } from '../../../../service/standard/standard.service';
import { Router } from '@angular/router';
import { ServicePathService } from '../../../../service/service-path.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '@core';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';
import { ProjectService } from '../../../../service/project/project.service';
import { SFSchema, SFSelectWidgetSchema } from '@delon/form';
import { deepCopy } from '@delon/util';

@Component({
  selector: 'app-device-record-list',
  templateUrl: './device-record-list.component.html',
  styles: [],
})
export class DeviceRecordListComponent extends ListComponent implements OnInit {
  schema: SFSchema = {
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
      name: { type: 'string', ui: { i18n: 'deviceRecord.name' } },
      code: { type: 'string', ui: { i18n: 'deviceRecord.code' } },
    },
  };
  initFinish = false;

  constructor(public deviceRecordService: DeviceRecordService, public router: Router, private servicePathService: ServicePathService, public projectService: ProjectService,
              public cdr: ChangeDetectorRef, public modal: NzModalService, @Inject(ALAIN_I18N_TOKEN) private i18NService: I18NService) {
    super(servicePathService.deviceRecord, deviceRecordService, modal, cdr, router);
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
    for (const entry of this.deviceRecordService.listPropertys) {
      if (entry === 'projectUuid') {
        this.columns.push({
          title: { i18n: 'deviceRecord.' + entry }, type: 'enum', index: entry,
          enum:
          enumProject,
        });
      } else {
        this.columns.push({ title: { i18n: 'deviceRecord.' + entry }, index: entry });
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
            acl: ['deviceRecord:edit'],
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

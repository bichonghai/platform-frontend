import { Component, Inject, OnInit } from '@angular/core';
import { EditComponent } from '../../../common/component/edit-component';
import { StandardService } from '../../../../service/standard/standard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '@core';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';
import { ProjectService } from '../../../../service/project/project.service';
import { SFSelectWidgetSchema } from '@delon/form';
import { deepCopy } from '@delon/util';

@Component({
  selector: 'app-device-record-edit',
  templateUrl: './device-record-edit.component.html',
  styles: [],
})
export class DeviceRecordEditComponent extends EditComponent implements OnInit {

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
      name: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.name' } },
      code: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.code' } },
      testDate: { type: 'string', format: 'date', maxLength: 50, ui: { i18n: 'deviceRecord.testDate' } },
      weight: { type: 'number', maxLength: 50, ui: { i18n: 'deviceRecord.weight' } },
      length: { type: 'number', maxLength: 50, ui: { i18n: 'deviceRecord.length' } },
      temperature: { type: 'number', maxLength: 50, ui: { i18n: 'deviceRecord.temperature' } },
      wind: { type: 'number', maxLength: 50, ui: { i18n: 'deviceRecord.wind' } },
      load: { type: 'number', maxLength: 50, ui: { i18n: 'deviceRecord.load' } },
      weather: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.weather' } },
      manufacturer: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.manufacturer' } },
      manufactureDate: { type: 'string', format: 'date', maxLength: 50, ui: { i18n: 'deviceRecord.manufactureDate' } },
      testLocation: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.testLocation' } },
    },
    required: ['projectUuid', 'name', 'code'],
    ui: {
      spanLabelFixed: 150,
      grid: { span: 12 },
    },
  };
  initFinish = false;

  constructor(public deviceRecordService: DeviceRecordService, public projectService: ProjectService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(deviceRecordService, modal, msg, router, i18NService, activatedRoute);
    projectService.listAll().subscribe(v => {
      this.initFinish = true;
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
    if (successData) {
      successData.forEach(p => {
        projects.push({ label: p['name'], value: p['uuid'] });
      });
    }
    this.schema.properties.projectUuid['enum'] = projects;
  }

  ngOnInit(): void {
    this.listPropertys = ['uuid', ...this.deviceRecordService.listPropertys];
    super.ngOnInit();
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { EditComponent } from '../../../common/component/edit-component';
import { StandardService } from '../../../../service/standard/standard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '@core';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';

@Component({
  selector: 'app-device-record-edit',
  templateUrl: './device-record-edit.component.html',
  styles: [
  ]
})
export class DeviceRecordEditComponent extends EditComponent implements OnInit {

  schema = {
    properties: {
      name: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.name' } },
      weight: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.weight' } },
      length: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.length' } },
      code: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.code' } },
      weather: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.weather' } },
      temperature: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.temperature' } },
      wind: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.wind' } },
      manufacturer: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.manufacturer' } },
      manufactureDate: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.manufactureDate' } },
      testLocation: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.testLocation' } },
      testDate: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.testDate' } },
      load: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.load' } }
    },
    required: ['name', 'code'],
    ui: {
      spanLabelFixed: 150,
      grid: { span: 24 },
    },
  };

  constructor(public deviceRecordService: DeviceRecordService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(deviceRecordService, modal, msg, router, i18NService, activatedRoute);

  }

  ngOnInit(): void {
    this.listPropertys = ['uuid', ...this.deviceRecordService.listPropertys];
    super.ngOnInit();
  }

}
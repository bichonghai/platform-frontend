import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ListComponent } from '../../../common/component/list-component';
import { StandardService } from '../../../../service/standard/standard.service';
import { Router } from '@angular/router';
import { ServicePathService } from '../../../../service/service-path.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '@core';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';

@Component({
  selector: 'app-device-record-list',
  templateUrl: './device-record-list.component.html',
  styles: [
  ]
})
export class DeviceRecordListComponent extends ListComponent implements OnInit {
  schema = {
    properties: {
      name: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.name' } },
      code: { type: 'string', maxLength: 50, ui: { i18n: 'deviceRecord.code' } },
    },
    ui: {
      spanLabel: 8,
    },
  };

  constructor(public deviceRecordService: DeviceRecordService, public router: Router, private servicePathService: ServicePathService,
              public cdr: ChangeDetectorRef, public modal: NzModalService, @Inject(ALAIN_I18N_TOKEN) private i18NService: I18NService) {
    super(servicePathService.deviceRecord, deviceRecordService, modal, cdr, router);
    for (const entry of deviceRecordService.listPropertys) {
      this.columns.push({ title: { i18n: 'deviceRecord.' + entry }, index: entry });
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
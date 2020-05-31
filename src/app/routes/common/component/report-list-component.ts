import { ListComponent } from './list-component';
import { CommonService } from '../service/common.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { SFSchema } from '@delon/form';
import { DeviceRecordService } from '../../../service/device-record/device-record.service';
import { STColumn } from '@delon/abc/st';

export class ReportListComponent extends ListComponent {
  public initFinish = false;

  constructor(protected  url, protected commonService: CommonService, public modal: NzModalService, public cdr: ChangeDetectorRef, public router: Router, public deviceRecordService: DeviceRecordService) {
    super(url, commonService, modal, cdr, router);
    this.path = this.router.url.substring(0, this.router.url.lastIndexOf('/'));
    document.body.style.minWidth = '100px';
  }

  public get listUrl() {
    return this.url + '/listJsonObject';
  }

  deviceRecordProcess(schema: SFSchema, columns: STColumn[], successData, failureData, model, listPropertys) {
    this.initFinish = true;
    const enumProject = {};
    if (successData) {
      schema.properties.deviceRecordUuid['enum'] = successData;
    }

    for (const entry of listPropertys) {
      this.columns.push({ title: { i18n: model + '.' + entry }, index: entry });
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
            acl: [model + ':edit'],
            click: (item: any) => this.edit(item),
          },
        ]
        ,
      },
    );
  }
}

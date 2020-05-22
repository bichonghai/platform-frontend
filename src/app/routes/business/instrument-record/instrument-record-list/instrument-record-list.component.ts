import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ListComponent } from '../../../common/component/list-component';
import { Router } from '@angular/router';
import { ServicePathService } from '../../../../service/service-path.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';
import { InstrumentRecordService } from '../../../../service/instrument-record/instrument-record.service';

@Component({
  selector: 'app-instrument-record-list',
  templateUrl: './instrument-record-list.component.html',
  styles: [
  ]
})
export class InstrumentRecordListComponent extends ListComponent implements OnInit {
  schema = {
    properties: {
      deviceRecordName: { type: 'string', maxLength: 50, ui: { i18n: 'instrumentRecord.deviceRecordName' } },
      name: { type: 'string', maxLength: 50, ui: { i18n: 'instrumentRecord.name' } },
    },
    ui: {
      spanLabel: 8,
    },
  };

  constructor(public instrumentRecordService: InstrumentRecordService, public router: Router, private servicePathService: ServicePathService,
              public cdr: ChangeDetectorRef, public modal: NzModalService, @Inject(ALAIN_I18N_TOKEN) private i18NService: I18NService) {
    super(servicePathService.instrumentRecord, instrumentRecordService, modal, cdr, router);
    for (const entry of instrumentRecordService.listPropertys) {
      this.columns.push({ title: { i18n: 'instrumentRecord.' + entry }, index: entry });
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
            acl: ['instrument:edit'],
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

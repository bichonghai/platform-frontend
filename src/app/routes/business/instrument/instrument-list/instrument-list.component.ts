import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ListComponent } from '../../../common/component/list-component';
import { Router } from '@angular/router';
import { ServicePathService } from '../../../../service/service-path.service';
import { NzModalService } from 'ng-zorro-antd';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '@core';
import { InstrumentService } from '../../../../service/instrument/instrument.service';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styles: [],
})
export class InstrumentListComponent extends ListComponent implements OnInit {
  schema = {
    properties: {
      type: { type: 'string', maxLength: 50, ui: { i18n: 'instrument.type' } },
      name: { type: 'string', maxLength: 50, ui: { i18n: 'instrument.name' } },
    },
    ui: {
      spanLabel: 8,
    },
  };

  constructor(public instrumentService: InstrumentService, public router: Router, private servicePathService: ServicePathService,
              public cdr: ChangeDetectorRef, public modal: NzModalService, @Inject(ALAIN_I18N_TOKEN) private i18NService: I18NService) {
    super(servicePathService.instrument, instrumentService, modal, cdr, router);
    for (const entry of instrumentService.listPropertys) {
      this.columns.push({ title: { i18n: 'instrument.' + entry }, index: entry });
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

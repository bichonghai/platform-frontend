import { Component, Inject, OnInit } from '@angular/core';
import { EditComponent } from '../../../common/component/edit-component';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '@core';
import { InstrumentService } from '../../../../service/instrument/instrument.service';

@Component({
  selector: 'app-instrument-edit',
  templateUrl: './instrument-edit.component.html',
  styles: [
  ]
})
export class InstrumentEditComponent extends EditComponent implements OnInit {
  schema = {
    properties: {
      type: { type: 'string', ui: { i18n: 'instrument.type' }, maxLength: 50 },
      name: { type: 'string', ui: { i18n: 'instrument.name' }, maxLength: 50 },
      code: { type: 'string', ui: { i18n: 'instrument.code' }, maxLength: 50 },
      state: { type: 'string', ui: { i18n: 'instrument.state' }, maxLength: 50 },
      description: { type: 'string', ui: { i18n: 'instrument.description', widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 } }, maxLength: 50 },
    },
    required: ['name'],
    ui: {
      spanLabelFixed: 150,
      grid: { span: 24 },
    },
  };
  constructor(public instrumentService: InstrumentService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(instrumentService, modal, msg, router, i18NService, activatedRoute);

  }

  ngOnInit(): void {
    this.listPropertys = ['uuid', ...this.instrumentService.listPropertys];
    super.ngOnInit();
  }

}

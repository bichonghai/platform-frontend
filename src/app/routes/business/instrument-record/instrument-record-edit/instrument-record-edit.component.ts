import { Component, Inject, OnInit } from '@angular/core';
import { EditComponent } from '../../../common/component/edit-component';
import { InstrumentService } from '../../../../service/instrument/instrument.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';
import { InstrumentRecordService } from '../../../../service/instrument-record/instrument-record.service';

@Component({
  selector: 'app-instrument-record-edit',
  templateUrl: './instrument-record-edit.component.html',
  styles: [
  ]
})
export class InstrumentRecordEditComponent  extends EditComponent implements OnInit {
  schema = {
    properties: {
      name: { type: 'string', ui: { i18n: 'instrumentRecord.name' }, maxLength: 50 },
      deviceRecordName: { type: 'string', ui: { i18n: 'instrumentRecord.deviceRecordName' }, maxLength: 50 },
      code: { type: 'string', ui: { i18n: 'instrumentRecord.code' }, maxLength: 50 },
      type: { type: 'string', ui: { i18n: 'instrumentRecord.type' }, maxLength: 50 },
      validityDate: { type: 'string', format: 'date', ui: { i18n: 'instrumentRecord.validityDate' }, maxLength: 50 },
      operator: { type: 'string', ui: { i18n: 'instrumentRecord.operator' }, maxLength: 50 },
      dataCollation: { type: 'string', ui: { i18n: 'instrumentRecord.dataCollation' }, maxLength: 50 },
      dataAnalysis: { type: 'string', ui: { i18n: 'instrumentRecord.dataAnalysis' }, maxLength: 50 },
    },
    required: ['name'],
    ui: {
      spanLabelFixed: 150,
      grid: { span: 24 },
    },
  };
  constructor(public instrumentRecordService: InstrumentRecordService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(instrumentRecordService, modal, msg, router, i18NService, activatedRoute);

  }

  ngOnInit(): void {
    this.listPropertys = ['uuid', ...this.instrumentRecordService.listPropertys];
    super.ngOnInit();
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { EditComponent } from '../../../common/component/edit-component';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '@core';
import { StandardService } from '../../../../service/standard/standard.service';

@Component({
  selector: 'app-standard-edit',
  templateUrl: './standard-edit.component.html',
  styles: [],
})
export class StandardEditComponent extends EditComponent implements OnInit {

  schema = {
    properties: {
      name: { type: 'string', ui: { i18n: 'standard.name' }, maxLength: 150 },
      code: { type: 'string', ui: { i18n: 'standard.code' }, maxLength: 150 },
      description: {
        type: 'string', ui: {
          i18n: 'standard.description', widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
        }, maxLength: 150,
      },
    },
    required: ['name', 'code'],
    ui: {
      spanLabelFixed: 150,
      grid: { span: 24 },
    },
  };

  constructor(public standardService: StandardService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(standardService, modal, msg, router, i18NService, activatedRoute);

  }

  ngOnInit(): void {
    this.listPropertys = ['uuid', ...this.standardService.listPropertys];
    super.ngOnInit();
  }

}

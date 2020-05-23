import { Component, Inject, OnInit } from '@angular/core';
import { EditComponent } from '../../../common/component/edit-component';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';
import { ThicknessSectionPositionService } from '../../../../service/thickness-section-position/thickness-section-position.service';

@Component({
  selector: 'app-thickness-section-position-edit',
  templateUrl: './thickness-section-position-edit.component.html',
  styles: [
  ]
})
export class ThicknessSectionPositionEditComponent extends EditComponent implements OnInit {
  schema = {
    properties: {
      sectionBridge: { type: 'string', ui: { i18n: 'thicknessSectionPosition.sectionBridge' }, maxLength: 50 },
      sectionCrane: { type: 'string', ui: { i18n: 'thicknessSectionPosition.sectionCrane' }, maxLength: 50 },
      position: { type: 'string', ui: { i18n: 'thicknessSectionPosition.position' }, maxLength: 50 },
    },
    required: ['name'],
    ui: {
      spanLabelFixed: 150,
      grid: { span: 24 },
    },
  };
  constructor(public thicknessSectionPositionService: ThicknessSectionPositionService,
              public router: Router, public activatedRoute: ActivatedRoute,
              public msg: NzMessageService, public modal: NzModalService,
              @Inject(ALAIN_I18N_TOKEN) public i18NService: I18NService) {
    super(thicknessSectionPositionService, modal, msg, router, i18NService, activatedRoute);

  }

  ngOnInit(): void {
    this.listPropertys = ['uuid', ...this.thicknessSectionPositionService.listPropertys];
    super.ngOnInit();
  }

}

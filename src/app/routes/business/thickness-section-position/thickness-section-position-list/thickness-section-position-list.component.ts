import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ListComponent } from '../../../common/component/list-component';
import { Router } from '@angular/router';
import { ServicePathService } from '../../../../service/service-path.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '../../../../core';
import { ThicknessSectionPositionService } from '../../../../service/thickness-section-position/thickness-section-position.service';

@Component({
  selector: 'app-thickness-section-position-list',
  templateUrl: './thickness-section-position-list.component.html',
  styles: [
  ]
})
export class ThicknessSectionPositionListComponent  extends ListComponent implements OnInit {
  schema = {
    properties: {
      position: { type: 'string', maxLength: 50, ui: { i18n: 'thicknessSectionPosition.position' } },
    },
    ui: {
      spanLabel: 8,
    },
  };

  constructor(public thicknessSectionPositionService: ThicknessSectionPositionService, public router: Router, private servicePathService: ServicePathService,
              public cdr: ChangeDetectorRef, public modal: NzModalService, @Inject(ALAIN_I18N_TOKEN) private i18NService: I18NService) {
    super(servicePathService.thicknessSectionPosition, thicknessSectionPositionService, modal, cdr, router);
    for (const entry of thicknessSectionPositionService.listPropertys) {
      this.columns.push({ title: { i18n: 'thicknessSectionPosition.' + entry }, index: entry });
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
            acl: ['thicknessSectionPosition:edit'],
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

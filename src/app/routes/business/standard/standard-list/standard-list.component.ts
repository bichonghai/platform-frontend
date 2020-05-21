import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { ListComponent } from '../../../common/component/list-component';
import { StandardService } from '../../../../service/standard/standard.service';
import { Router } from '@angular/router';
import { ServicePathService } from '../../../../service/service-path.service';
import { NzModalService } from 'ng-zorro-antd';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '@core';

@Component({
  selector: 'app-standard-list',
  templateUrl: './standard-list.component.html',
  styles: [
  ]
})
export class StandardListComponent  extends ListComponent implements OnInit {
  schema  = {
    properties: {
      name: { type: 'string', maxLength: 50 ,ui:{i18n:"standard.name"}},
      code: { type: 'string', maxLength: 50,ui:{i18n:"standard.code"} },
    },
    ui: {
      spanLabel: 8
    },
  }
  constructor(public standardService: StandardService, public router: Router, private servicePathService: ServicePathService,
              public cdr: ChangeDetectorRef, public modal: NzModalService, @Inject(ALAIN_I18N_TOKEN) private i18NService: I18NService) {
    super(servicePathService.standard, standardService, modal, cdr, router);
    for (let entry of standardService.listPropertys) {
      this.columns.push({title:{i18n:"standard."+entry},index:entry})
    }
    this.columns.push(
      {
        title: '操作',
        buttons: [
          {
            i18n:'menu.operator.detail',
            click: (item: any) => this.detail(item)
          },
          {
            i18n:'menu.operator.edit',
            acl:["standard:edit"],
            click: (item: any) => this.edit(item)
          },
        ]
        ,}
    )
  }

  ngOnInit(): void {
  }

}

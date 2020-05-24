import { CommonService } from '../service/common.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute, Router } from '@angular/router';
import { I18NService } from '@core';
import { EditComponent } from './edit-component';
import { SFSchema } from '@delon/form';

export class ReportEditComponent extends  EditComponent{
  initFinish = false;
  constructor(public commonService: CommonService, public modal: NzModalService, public msg: NzMessageService, public router: Router, public i18NService: I18NService, public activatedRoute: ActivatedRoute) {
    super(commonService, modal, msg, router, i18NService, activatedRoute);
  }
  deviceRecordProcess(schema: SFSchema, successData) {
    this.initFinish = true;
    if (successData) {
      schema.properties.deviceRecordUuid['enum'] = successData;
    }
  }
  ngOnInit(): void {
    this.detail();
  }
  detail(){
    if (this.uuid && this.uuid.length > 0) {
      this.commonService.detailJsonObject(this.uuid).subscribe((v: any) => {
        this.commonService.responseWrapperProcess(v, (successData) => {
          this.listPropertys.forEach(v2 => {
            this.model[v2] = successData[v2];
          });
          if (this.sf) {
            this.sf.refreshSchema();
          }
        }, (failData) => {
          this.msg.error('获取信息失败');
        });

      });
    }
  }

}

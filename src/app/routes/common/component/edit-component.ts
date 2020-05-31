import { CommonService } from '../service/common.service';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SFComponent } from '@delon/form';
import { I18NService } from '@core';

export class EditComponent {
  public uuid = '';
  public model: any = {};
  @ViewChild('sf', { static: false }) public sf: SFComponent;
  public listPropertys = [];
  public path: string;

  constructor(public commonService: CommonService, public modal: NzModalService, public msg: NzMessageService, public router: Router, public i18NService: I18NService, public activatedRoute: ActivatedRoute) {
    this.path = this.router.url.substring(0, this.router.url.lastIndexOf('/'));
    this.activatedRoute.queryParams.subscribe((v: Params) => {
      this.uuid = v.uuid;
    });
    document.body.style.minWidth = '';
  }

  ngOnInit(): void {
    this.detai();
  }
  detai(){
    if (this.uuid && this.uuid.length > 0) {
      this.commonService.detail(this.uuid).subscribe((v: any) => {
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
  submit(event) {
    this.commonService.addOrUpdate(event).subscribe(v => {
      this.commonService.responseWrapperProcess(v, (successData) => {
        this.modal.success({
          nzTitle: '',
          nzContent: '操作成功',
          nzMask: false,
          nzOnOk: () => {
            this.router.navigateByUrl(this.path + '/list');
          },
        });
      }, (failureData) => {
        this.commonService.formErrorProcess(failureData, this.sf);
      });
    });
  }
}

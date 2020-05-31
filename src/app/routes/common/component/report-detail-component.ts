import { CommonService } from '../service/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailComponent } from './detail-component';
import { ResponseWrapper } from '../dto/response-wrapper';

export class ReportDetailComponent extends DetailComponent {
  constructor(public commonService: CommonService, public router: Router, public activatedRoute: ActivatedRoute, public detailPropertys: Set<string>, public i18nPrefix) {
    super(commonService, router, activatedRoute, detailPropertys, i18nPrefix);
    document.body.style.minWidth = '600px';
  }

  ngOnInit(): void {
    this.detail();
  }

  detail(): void {
    this.commonService.detailJsonObject(this.uuid).subscribe((v: ResponseWrapper) => {
      this.commonService.responseWrapperProcess(v, (successData) => {
        this.detailPropertys.forEach(key => {
          if (key === 'deviceRecordUuid') {
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: successData['deviceRecordShow'] });
          }else{
            this.propertys.push({ label: this.i18nPrefix + '.' + key, value: successData[key] });
          }

        });
      }, (failureData) => {

      });

    });
  }
}

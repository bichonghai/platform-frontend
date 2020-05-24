import { ResponseWrapper } from '../dto/response-wrapper';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { zip } from 'rxjs';
import { ProjectService } from '../../../service/project/project.service';

export  class DetailComponent {
  public uuid = '';
  public propertys = [];
  public path: string;

  constructor(public commonService: CommonService, public router: Router, public activatedRoute: ActivatedRoute, public detailPropertys: Set<string>, public i18nPrefix) {
    this.path = this.router.url.substring(0, this.router.url.lastIndexOf('/'));
    this.activatedRoute.queryParams.subscribe((v: Params) => {
      this.uuid = v.uuid;
    });
  }
  ngOnInit(): void {
    this.detail();
  }
  detail(): void {
    this.commonService.detail(this.uuid).subscribe((v: ResponseWrapper) => {
      this.commonService.responseWrapperProcess(v, (successData) => {
        this.detailPropertys.forEach(key => {
          this.propertys.push({ label: this.i18nPrefix + '.' + key, value: successData[key] });
        });
      }, (failureData) => {

      });

    });
  }

  back() {
    this.router.navigateByUrl(this.path + '/list');
  }

}

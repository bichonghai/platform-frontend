import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailComponent } from '../../../common/component/detail-component';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';
import { ResponseWrapper } from '../../../common/dto/response-wrapper';
import { ProjectService } from '../../../../service/project/project.service';

@Component({
  selector: 'app-device-record-detail',
  templateUrl: './device-record-detail.component.html',
  styles: [],
})
export class DeviceRecordDetailComponent extends DetailComponent implements OnInit {

  constructor(public  deviceRecordService: DeviceRecordService, public projectService: ProjectService, public router: Router, public activatedRoute: ActivatedRoute) {
    super(deviceRecordService, router, activatedRoute, deviceRecordService.detailPropertys, 'deviceRecord');
  }

  ngOnInit(): void {
    this.commonService.detail(this.uuid).subscribe((v: ResponseWrapper) => {
      this.commonService.responseWrapperProcess(v, (successData) => {
        this.successDataProcess(successData);
      }, (failureData) => {
      });

    });
  }

  successDataProcess(successData) {
    this.projectService.detail(successData['projectUuid']).subscribe(p => {
      this.projectService.responseWrapperProcess(p, (successDataProject) => {
        const projectName = successDataProject['name'];
        this.projectNameProcess(successData, projectName);
      }, (fFun) => {
        this.projectNameProcess(successData, null);
      });
    });
  }
  projectNameProcess(successData, projectName) {
    this.detailPropertys.forEach(key => {
      if (key === 'projectUuid' && projectName != null) {
        this.propertys.push({ label: this.i18nPrefix + '.' + key, value: projectName });
      } else {
        this.propertys.push({ label: this.i18nPrefix + '.' + key, value: successData[key] });
      }
    });
  }
}

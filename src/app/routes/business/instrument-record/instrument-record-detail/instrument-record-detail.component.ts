import { Component, OnInit } from '@angular/core';
import { DetailComponent } from '../../../common/component/detail-component';
import { ActivatedRoute, Router } from '@angular/router';
import { InstrumentRecordService } from '../../../../service/instrument-record/instrument-record.service';
import { ResponseWrapper } from '../../../common/dto/response-wrapper';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';
import { ProjectService } from '../../../../service/project/project.service';

@Component({
  selector: 'app-instrument-record-detail',
  templateUrl: './instrument-record-detail.component.html',
  styles: [
  ]
})
export class InstrumentRecordDetailComponent  extends DetailComponent implements OnInit {

  constructor(public instrumentRecordService: InstrumentRecordService, public projectService: ProjectService, public router: Router, public activatedRoute: ActivatedRoute) {
    super(instrumentRecordService, router, activatedRoute, instrumentRecordService.detailPropertys, 'instrumentRecord');
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

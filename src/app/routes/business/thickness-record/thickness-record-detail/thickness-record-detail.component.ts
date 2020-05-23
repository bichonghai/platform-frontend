import { Component, OnInit } from '@angular/core';
import { DetailComponent } from '../../../common/component/detail-component';
import { ActivatedRoute, Router } from '@angular/router';
import { ThicknessRecordService } from '../../../../service/thickness-record/thickness-record.service';
import { ProjectService } from '../../../../service/project/project.service';
import { ResponseWrapper } from '../../../common/dto/response-wrapper';

@Component({
  selector: 'app-thickness-record-detail',
  templateUrl: './thickness-record-detail.component.html',
  styles: [
  ]
})
export class ThicknessRecordDetailComponent extends DetailComponent implements OnInit {

  constructor(public thicknessRecordService: ThicknessRecordService, public projectService: ProjectService, public router: Router, public activatedRoute: ActivatedRoute) {
    super(thicknessRecordService, router, activatedRoute, thicknessRecordService.detailPropertys, 'thicknessRecord');
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

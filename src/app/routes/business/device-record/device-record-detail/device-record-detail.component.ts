import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailComponent } from '../../../common/component/detail-component';
import { DeviceRecordService } from '../../../../service/device-record/device-record.service';

@Component({
  selector: 'app-device-record-detail',
  templateUrl: './device-record-detail.component.html',
  styles: [
  ]
})
export class DeviceRecordDetailComponent  extends DetailComponent implements OnInit {

  constructor(public  deviceRecordService: DeviceRecordService, public router: Router, public activatedRoute: ActivatedRoute) {
    super(deviceRecordService, router, activatedRoute, deviceRecordService.detailPropertys, 'deviceRecord');
  }
}

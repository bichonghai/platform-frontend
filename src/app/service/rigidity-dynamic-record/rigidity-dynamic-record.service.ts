import { Injectable } from '@angular/core';
import { CommonService } from '../../routes/common/service/common.service';
import { ServicePathService } from '../service-path.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RigidityDynamicRecordService extends CommonService {

  constructor(protected servicePathService: ServicePathService, protected httpClient: HttpClient) {
    super(servicePathService.rigidityDynamicRecord, httpClient);
  }

  detailPropertys = new Set(['deviceRecordUuid',  'workingConditions']);
  listPropertys = new Set(['deviceRecordUuid', 'workingConditionsSize']);
  editPropertys = new Set(['deviceRecordUuid',  'workingConditions']);
}

import { Injectable } from '@angular/core';
import { CommonService } from '../../routes/common/service/common.service';
import { ServicePathService } from '../service-path.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StrengthDynamicLoadRecordService extends CommonService {

  constructor(protected servicePathService: ServicePathService, protected httpClient: HttpClient) {
    super(servicePathService.strengthDynamicLoadRecord, httpClient);
  }

  detailPropertys = new Set(['deviceRecordUuid', 'itemDetails', 'workingDetails']);
  listPropertys = new Set(['deviceRecordUuid', 'itemDetailsSize', 'workingDetailsSize']);
  editPropertys = new Set(['deviceRecordUuid', 'itemDetails', 'workingDetails']);
}

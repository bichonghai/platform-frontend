import { Injectable } from '@angular/core';
import { CommonService } from '../../routes/common/service/common.service';
import { ServicePathService } from '../service-path.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DiagonalRecordService extends CommonService {

  constructor(protected servicePathService: ServicePathService, protected httpClient: HttpClient) {
    super(servicePathService.diagonalRecord, httpClient);
  }

  detailPropertys = new Set(['deviceRecordUuid', 'workingCondition', 'workingDetails']);
  listPropertys = new Set(['deviceRecordUuid', 'workingDetailsSize']);
  editPropertys = new Set(['deviceRecordUuid', 'workingCondition', 'workingDetails']);
}

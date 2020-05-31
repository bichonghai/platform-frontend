import { Injectable } from '@angular/core';
import { CommonService } from '../../routes/common/service/common.service';
import { ServicePathService } from '../service-path.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ThicknessRecordService extends CommonService {

  constructor(protected servicePathService: ServicePathService, protected httpClient: HttpClient) {
    super(servicePathService.thicknessRecord, httpClient);
  }

  detailPropertys = new Set(['deviceRecordUuid', 'thicknessDetails']);
  listPropertys = new Set(['deviceRecordUuid', 'thicknessDetailsSize']);
  editPropertys = new Set(['deviceRecordUuid', 'thicknessDetails']);
}

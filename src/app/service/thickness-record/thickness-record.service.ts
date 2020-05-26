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

  detailPropertys = new Set(['deviceRecordUuid', 'thicknessSectionPositionRecordUuid', 'thickness', 'paint', 'rust', 'instrumentRecords']);
  listPropertys = new Set(['deviceRecordUuid', 'thicknessSectionPositionRecordUuid', 'thickness', 'paint', 'rust']);
  editPropertys = new Set(['deviceRecordUuid', 'thicknessSectionPositionRecordUuid', 'thickness', 'paint', 'rust', 'instrumentRecords']);
}

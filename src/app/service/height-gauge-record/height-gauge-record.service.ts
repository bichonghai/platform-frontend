import { Injectable } from '@angular/core';
import { CommonService } from '../../routes/common/service/common.service';
import { ServicePathService } from '../service-path.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeightGaugeRecordService  extends CommonService {

  constructor(protected servicePathService: ServicePathService, protected httpClient: HttpClient) {
    super(servicePathService.heightGaugeRecord, httpClient);
  }

  detailPropertys = new Set(['deviceRecordUuid', 'gateLocation', 'direction', 'distance', 'trackLength', 'levelingInstrument', 'carSpace', 'sectionPosition', 'workingDetails']);
  listPropertys = new Set(['deviceRecordUuid', 'workingDetailsSize']);
  editPropertys = new Set(['deviceRecordUuid', 'gateLocation', 'direction', 'distance', 'trackLength', 'levelingInstrument', 'carSpace', 'sectionPosition', 'workingDetails']);
}

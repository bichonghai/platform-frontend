import { Injectable } from '@angular/core';
import { CommonService } from '../../routes/common/service/common.service';
import { ServicePathService } from '../service-path.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GaugeRecordService extends CommonService {

  constructor(protected servicePathService: ServicePathService, protected httpClient: HttpClient) {
    super(servicePathService.gaugeRecord, httpClient);
  }

  detailPropertys = new Set(['deviceRecordUuid', 'gateLocation', 'direction', 'nominalGauge', 'trackLength', 'position', 'carSpace', 'sectionPosition', 'workingDetails']);
  listPropertys = new Set(['deviceRecordUuid', 'workingDetailsSize']);
  editPropertys = new Set(['deviceRecordUuid', 'gateLocation', 'direction', 'nominalGauge', 'trackLength', 'position', 'carSpace', 'sectionPosition', 'workingDetails']);
}

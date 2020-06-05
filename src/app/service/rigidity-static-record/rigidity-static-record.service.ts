import { Injectable } from '@angular/core';
import { CommonService } from '../../routes/common/service/common.service';
import { ServicePathService } from '../service-path.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RigidityStaticRecordService extends CommonService {

  constructor(protected servicePathService: ServicePathService, protected httpClient: HttpClient) {
    super(servicePathService.rigidityStaticRecord, httpClient);
  }

  detailPropertys = new Set(['deviceRecordUuid', 'gateLocation', 'direction', 'distance', 'trackLength', 'levelingInstrument', 'carSpace', 'sectionPosition', 'workingConditions', 'workingDetails']);
  listPropertys = new Set(['deviceRecordUuid', 'workingConditionsSize', 'workingDetailsSize']);
  editPropertys = new Set(['deviceRecordUuid', 'gateLocation', 'direction', 'distance', 'trackLength', 'levelingInstrument', 'carSpace', 'sectionPosition', 'workingConditions', 'workingDetails']);
}

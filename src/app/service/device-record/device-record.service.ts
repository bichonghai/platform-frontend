import { Injectable } from '@angular/core';
import { ServicePathService } from '../service-path.service';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../routes/common/service/common.service';

@Injectable({
  providedIn: 'root',
})
export class DeviceRecordService extends CommonService {
  constructor(protected servicePathService: ServicePathService, protected httpClient: HttpClient) {
    super(servicePathService.deviceRecord, httpClient);
  }

  detailPropertys = new Set(['projectUuid', 'name', 'weight', 'length', 'code', 'weather', 'temperature', 'wind',
    'manufacturer', 'manufactureDate', 'testLocation', 'testDate', 'load']);
  listPropertys = new Set(['projectUuid', 'name', 'weight', 'length', 'code', 'weather', 'temperature', 'wind',
    'manufacturer', 'manufactureDate', 'testLocation', 'testDate', 'load']);
}

import { Injectable } from '@angular/core';
import { CommonService } from '../../routes/common/service/common.service';
import { ServicePathService } from '../service-path.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThicknessSectionPositionService  extends CommonService {

  constructor(protected servicePathService: ServicePathService, protected httpClient: HttpClient) {
    super(servicePathService.thicknessSectionPosition, httpClient);
  }
  detailPropertys = new Set(['sectionBridge', 'sectionCrane', 'position']);
  listPropertys = new Set(['sectionBridge', 'sectionCrane', 'position']);
}

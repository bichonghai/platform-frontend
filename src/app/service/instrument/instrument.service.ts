import { Injectable } from '@angular/core';
import { CommonService } from '../../routes/common/service/common.service';
import { ServicePathService } from '../service-path.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService extends  CommonService{

  constructor(protected servicePathService: ServicePathService, protected httpClient: HttpClient) {
    super(servicePathService.instrument, httpClient);
  }
  detailPropertys = new Set(["type","name","code","state","description"]);
  listPropertys = new Set(["type","name","code","state","description"]);
}

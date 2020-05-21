import { Injectable } from '@angular/core';
import { ServicePathService } from '../service-path.service';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../routes/common/service/common.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService  extends  CommonService {

  constructor(protected servicePathService: ServicePathService, protected httpClient: HttpClient) {
    super(servicePathService.role, httpClient);
  }
  detailPropertys = new Set(["roleName","description"]);
  listPropertys = new Set(["roleName","description"]);
}

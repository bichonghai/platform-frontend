import { Injectable } from '@angular/core';
import { ServicePathService } from '../service-path.service';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../routes/common/service/common.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionService extends CommonService {
  constructor(protected servicePathService: ServicePathService, protected httpClient: HttpClient) {
    super(servicePathService.permission, httpClient);
  }
}

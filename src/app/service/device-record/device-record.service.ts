import { Injectable } from '@angular/core';
import { ServicePathService } from '../service-path.service';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../routes/common/service/common.service';
import { Observable, throwError } from 'rxjs';
import { catchError, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DeviceRecordService extends CommonService {
  detailPropertys = new Set(['projectUuid', 'name', 'code', 'testDate', 'weight', 'length', 'weather', 'temperature', 'wind',
    'manufacturer', 'manufactureDate', 'testLocation', 'testDate', 'load']);
  listPropertys = new Set(['projectUuid', 'name', 'code', 'testDate', 'weight', 'length', 'weather', 'temperature', 'wind',
    'manufacturer', 'manufactureDate', 'testLocation', 'testDate', 'load']);
  constructor(protected servicePathService: ServicePathService, protected httpClient: HttpClient) {
    super(servicePathService.deviceRecord, httpClient);
  }
  tree(): Observable<any> {
    return this.httpClient.get(this.url + '/tree').pipe(
      debounceTime(500),
      catchError((errMsg: Response | any) => {
        return throwError(errMsg);
      }),
    );
  }
}

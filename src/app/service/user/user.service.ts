import { Injectable } from '@angular/core';
import { ServicePathService } from '../service-path.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, debounceTime, map } from 'rxjs/operators';
import { CommonService } from '../../routes/common/service/common.service';


@Injectable({
  providedIn: 'root',
})
export class UserService extends CommonService {

  constructor(protected servicePathService: ServicePathService, protected httpClient: HttpClient) {
    super(servicePathService.user, httpClient);
  }

  detailPropertys = new Set(['userName', 'userFullName', 'password', 'sex', 'email', 'telephone', 'mobilephone', 'address']);
  listPropertys = new Set(['userName', 'userFullName', 'sex', 'email', 'telephone', 'mobilephone', 'address']);

  public login(name: string, password: string): Observable<any> {
    const params = { 'name': name, 'password': password };
    return this.httpClient.get(this.servicePathService.loginUrl, { 'params': params }).pipe(
      debounceTime(500),
      catchError((errMsg: Response | any) => {
        return throwError(errMsg);
      }),
    );
  }

  public dingdingLoginUrl(): Observable<any> {
    return this.httpClient.get(this.servicePathService.dingdingLoginUrl).pipe(
      debounceTime(500),
      catchError((errMsg: Response | any) => {
        return throwError(errMsg);
      }),
    );
  }

  public dingdingLogin(code, state): Observable<any> {
    const params = { 'code': code, 'state': state };
    return this.httpClient.get(this.servicePathService.dingdingLogin, { 'params': params }).pipe(
      debounceTime(500),
      catchError((errMsg: Response | any) => {
        return throwError(errMsg);
      }),
    );
  }

  public tokenLogin(token: string): Observable<any> {
    return this.httpClient.get(this.servicePathService.tokenLoginUrl).pipe(
      debounceTime(500),
      catchError((errMsg: Response | any) => {
        return throwError(errMsg);
      }),
    );
  }

  public userRoleUuids(uuid: string): Observable<any> {
    return this.httpClient.get(this.url + '/userRoleUuids', { params: { 'uuid': uuid } }).pipe(
      debounceTime(500),
      catchError((errMsg: Response | any) => {
        return throwError(errMsg);
      }),
    );
  }

  public userRoleUuidsToUser(uuid: string, uuidsRole: string[]): Observable<any> {
    return this.httpClient.get(this.url + '/userRoleUuidsToUser', {
      params: {
        'uuid': uuid,
        'uuidsRole': uuidsRole.join(','),
      },
    }).pipe(
      debounceTime(500),
      catchError((errMsg: Response | any) => {
        return throwError(errMsg);
      }),
    );
  }
}

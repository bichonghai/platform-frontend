import { ServicePathService } from '../../../service/service-path.service';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, debounceTime } from 'rxjs/operators';
import { Identifier } from '../../model/identifier';
import { SFComponent } from '@delon/form';
import { ResponseWrapper } from '../dto/response-wrapper';


export class CommonService {

  constructor(protected url: string, protected httpClient: HttpClient) {
  }

  listAll(): Observable<any> {
    return this.httpClient.get(this.url + '/listAll').pipe(
      debounceTime(500),
      catchError((errMsg: Response | any) => {
        return throwError(errMsg);
      }),
    );
  }

  detail(uuid: string): Observable<any> {
    return this.httpClient.get(this.url + '/detail', { params: { 'uuid': uuid } }).pipe(
      debounceTime(500),
      catchError((errMsg: Response | any) => {
        return throwError(errMsg);
      }),
    );
  }

  delete(uuids: string): Observable<any> {
    return this.httpClient.get(this.url + '/delete', { params: { 'deleteseleted': uuids } }).pipe(
      debounceTime(500),
      catchError((errMsg: Response | any) => {
        return throwError(errMsg);
      }),
    );
  }

  addOrUpdate(identifier: Identifier): Observable<any> {
    let url = '';
    if (identifier.uuid && identifier.uuid.length > 0) {
      url = this.url + '/edit';
    } else {
      url = this.url + '/add';
    }
    return this.httpClient.post(url, identifier).pipe(
      debounceTime(500),
      catchError((errMsg: Response | any) => {
        return throwError(errMsg);
      }),
    );
  }

  responseWrapperProcess(response: ResponseWrapper, successFun, failFun): any {
    if (response.code === 200) {
      successFun(response.data);
    } else {
      const errorMsg = response.data;
      failFun(errorMsg);
    }
  }

  formErrorProcess(failureData: any, sf: SFComponent) {
    const details: [] = failureData.details;
    if (details) {
      details.forEach(detail => {
        Object.keys(detail).forEach(key => {
          sf.getProperty('/' + key).setParentAndPlatErrors([{ keyword: key, message: detail[key] }], '/' + key);
        });
      });
    }
  }
}

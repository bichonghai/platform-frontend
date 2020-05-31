import { Injectable, Injector, Optional } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DA_SERVICE_TOKEN, ITokenModel, JWTTokenModel, mergeConfig } from '@delon/auth';
import { AlainAuthConfig, AlainConfigService } from '@delon/util';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  protected model: ITokenModel;

  constructor(@Optional() protected injector: Injector) {
  }

  isAuth(options: AlainAuthConfig): boolean {
    this.model = this.injector.get(DA_SERVICE_TOKEN).get<JWTTokenModel>(JWTTokenModel);
    return this.CheckJwt(this.model as JWTTokenModel, options.token_exp_offset!);
  }

  CheckJwt(model: JWTTokenModel, offset: number): boolean {
    return model != null && !!model.token && !model.isExpired(offset);
  }

  setReq(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.model.token}`,
      },
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const options = mergeConfig(this.injector.get(AlainConfigService));
    try {
      if (this.isAuth(options)) {
        request = this.setReq(request);
      }
    } catch (e) {

    }

    return next.handle(request);
  }
}

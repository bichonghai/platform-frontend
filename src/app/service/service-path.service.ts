import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicePathService {
  public loginUrl=environment.platformUrl+"/index/login";
  public tokenLoginUrl=environment.platformUrl+"/index/tokenLogin";
  public user=environment.platformUrl+"/user";
  public role=environment.platformUrl+"/role";
  public permission=environment.platformUrl+"/permission";
  public instrument=environment.platformUrl+"/instrument";
  public standard=environment.platformUrl+"/standard";
  constructor() {
  }
}

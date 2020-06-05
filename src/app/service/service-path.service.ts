import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class ServicePathService {
  public loginUrl = environment.platformUrl + '/index/login';
  public tokenLoginUrl = environment.platformUrl + '/index/tokenLogin';
  public user = environment.platformUrl + '/user';
  public role = environment.platformUrl + '/role';
  public permission = environment.platformUrl + '/permission';
  public instrument = environment.platformUrl + '/instrument';
  public project = environment.platformUrl + '/project';
  public instrumentRecord = environment.platformUrl + '/instrumentRecord';
  public standard = environment.platformUrl + '/standard';
  public deviceRecord = environment.platformUrl + '/deviceRecord';
  public thicknessSectionPosition = environment.platformUrl + '/thicknessSectionPosition';
  public thicknessRecord = environment.platformUrl + '/thicknessRecord';
  public strengthStaticLoadRecord = environment.platformUrl + '/strengthStaticLoadRecord';
  public rigidityStaticRecord = environment.platformUrl + '/rigidityStaticRecord';
  public heightGaugeRecord = environment.platformUrl + '/heightGaugeRecord';
  public diagonalRecord = environment.platformUrl + '/diagonalRecord';
  constructor() {
  }
}

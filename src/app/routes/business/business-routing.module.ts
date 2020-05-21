import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'instrument',
    canActivate: [],
    loadChildren: () => import('./instrument/instrument.module').then(m => m.InstrumentModule)
  },
  {
    path: 'standard',
    canActivate: [],
    loadChildren: () => import('./standard/standard.module').then(m => m.StandardModule)
  },
  {
    path: 'device-record',
    canActivate: [],
    loadChildren: () => import('./device-record/device-record.module').then(m => m.DeviceRecordModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }

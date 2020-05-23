import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'project',
    canActivate: [],
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
  },
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
  {
    path: 'instrument-record',
    canActivate: [],
    loadChildren: () => import('./instrument-record/instrument-record.module').then(m => m.InstrumentRecordModule)
  },
  {
    path: 'thickness-section-position',
    canActivate: [],
    loadChildren: () => import('./thickness-section-position/thickness-section-position.module').then(m => m.ThicknessSectionPositionModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }

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
    path: 'thickness-section-position',
    canActivate: [],
    loadChildren: () => import('./thickness-section-position/thickness-section-position.module').then(m => m.ThicknessSectionPositionModule)
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
    path: 'thickness-record',
    canActivate: [],
    loadChildren: () => import('./thickness-record/thickness-record.module').then(m => m.ThicknessRecordModule)
  },
  {
    path: 'strength-static-load-record',
    canActivate: [],
    loadChildren: () => import('./strength-static-load-record/strength-static-load-record.module').then(m => m.StrengthStaticLoadRecordModule)
  },
  {
    path: 'rigidity-static-record',
    canActivate: [],
    loadChildren: () => import('./rigidity-static-record/rigidity-static-record.module').then(m => m.RigidityStaticRecordModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }

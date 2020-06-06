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
    path: 'strength-dynamic-load-record',
    canActivate: [],
    loadChildren: () => import('./strength-dynamic-load-record/strength-dynamic-load-record.module').then(m => m.StrengthDynamicLoadRecordModule)
  },
  {
    path: 'rigidity-static-record',
    canActivate: [],
    loadChildren: () => import('./rigidity-static-record/rigidity-static-record.module').then(m => m.RigidityStaticRecordModule)
  },
  {
    path: 'rigidity-dynamic-record',
    canActivate: [],
    loadChildren: () => import('./rigidity-dynamic-record/rigidity-dynamic-record.module').then(m => m.RigidityDynamicRecordModule)
  },
  {
    path: 'height-gauge-record',
    canActivate: [],
    loadChildren: () => import('./height-gauge-record/height-gauge-record.module').then(m => m.HeightGaugeRecordModule)
  },
  {
    path: 'gauge-record',
    canActivate: [],
    loadChildren: () => import('./gauge-record/gauge-record.module').then(m => m.GaugeRecordModule)
  },
  {
    path: 'diagonal-record',
    canActivate: [],
    loadChildren: () => import('./diagonal-record/diagonal-record.module').then(m => m.DiagonalRecordModule)
  },
  {
    path: 'inclination-record',
    canActivate: [],
    loadChildren: () => import('./inclination-record/inclination-record.module').then(m => m.InclinationRecordModule)
  },
  {
    path: 'same-position-difference-record',
    canActivate: [],
    loadChildren: () => import('./same-position-difference-record/same-position-difference-record.module').then(m => m.SamePositionDifferenceRecordModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }

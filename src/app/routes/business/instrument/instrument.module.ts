import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrumentRoutingModule } from './instrument-routing.module';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import { InstrumentEditComponent } from './instrument-edit/instrument-edit.component';
import { InstrumentDetailComponent } from './instrument-detail/instrument-detail.component';
import { SharedModule } from '@shared';
import { LayoutModule } from '../../../layout/layout.module';


@NgModule({
  declarations: [InstrumentListComponent, InstrumentEditComponent, InstrumentDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    InstrumentRoutingModule
  ]
})
export class InstrumentModule { }

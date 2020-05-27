import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonTableDetailComponent } from './common-table-detail/common-table-detail.component';
import { SharedModule } from '../../../shared';
import { LayoutModule } from '../../../layout/layout.module';


@NgModule({
  declarations: [CommonTableDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
  ],
  exports: [CommonTableDetailComponent],
})
export class CommonBusinessModule {
}

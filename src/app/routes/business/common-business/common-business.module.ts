import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonTableDetailComponent } from './common-table-detail/common-table-detail.component';
import { SharedModule } from '../../../shared';
import { LayoutModule } from '../../../layout/layout.module';
import { TableWidgetComponent } from './table-widget/table-widget.component';
import { DelonFormModule, WidgetRegistry } from '@delon/form';


@NgModule({
  declarations: [CommonTableDetailComponent, TableWidgetComponent],
  imports: [
    CommonModule,
    SharedModule,
    DelonFormModule.forRoot(),
    LayoutModule,
  ],
  exports: [CommonTableDetailComponent, TableWidgetComponent],
})
export class CommonBusinessModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TableWidgetComponent.KEY, TableWidgetComponent);
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ArrayLayoutWidget, FormProperty } from '@delon/form';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-table-widget',
  templateUrl: './table-widget.component.html',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  styles: [],
})
export class TableWidgetComponent extends ArrayLayoutWidget implements OnInit {
  static readonly KEY = 'tableWidget';
  addTitle: SafeHtml;
  addType: string;
  removeTitle: string | null;
  arraySpan = 8;

  get addDisabled() {
    return this.disabled || (this.schema.maxItems && (this.formProperty.properties as FormProperty[]).length >= this.schema.maxItems);
  }

  get showRemove() {
    return !this.disabled && this.removeTitle;
  }

  ngOnInit(): void {
    const { grid, addTitle, addType, removable, removeTitle } = this.ui;
    if (grid && grid.arraySpan) {
      this.arraySpan = grid.arraySpan;
    }

    this.addTitle = this.dom.bypassSecurityTrustHtml(addTitle || this.l.addText);
    this.addType = addType || 'dashed';
    this.removeTitle = removable === false ? null : removeTitle || this.l.removeText;
  }

  addItem() {
    this.formProperty.add({});
  }

  removeItem(index: number) {
    this.formProperty.remove(index);
  }
}

import { ChangeDetectorRef, Component, Inject, Injector, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ArrayLayoutWidget, SFComponent, SFItemComponent, SFValue } from '@delon/form';
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
  @Input()
  showOper = true;
  @Input()
  showScroll = {};

  constructor(
    @Inject(ChangeDetectorRef) protected readonly cd: ChangeDetectorRef,
    @Inject(Injector) protected readonly injector: Injector,
    @Inject(SFItemComponent) protected readonly sfItemComp?: SFItemComponent,
    @Inject(SFComponent) protected readonly sfComp?: SFComponent,
  ) {
    super(cd, injector, sfItemComp, sfComp);
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

  get labels() {
    const labels = [];
    Object.values(this.schema.items.properties).forEach(value => {
      labels.push(value['title']);
    });
    return labels;
  }

  get keys() {
    const labels = [];
    Object.keys(this.schema.items.properties).forEach(value => {
      labels.push(value);
    });
    return labels;
  }

  get values(): any[] {
    let values = [];
    // @ts-ignore
    const properties: [] = this.formProperty._value;
    if (properties) {
      values = properties;
    }
    return values;
  }


  addItem(index: number) {
    const properties: any[] = this.formProperty._value;
    properties.splice(index + 1, 0, this.model());
  }

  removeItem(index: number) {
    const properties: any[] = this.formProperty._value;
    properties.splice(index, 1);
  }

  reset(value: SFValue) {

  }

  model() {
    const model = {};
    this.keys.forEach(value => {
      model[value] = ''; // 防止模型将一些空的元素过滤掉
    });
    return model;
  }

  get items() {
    if (this.values.length > 0) {
      return this.values;
    } else {

      this.values.push(this.model());
      return this.values;
    }
  }

  change(e, index, key) {
    this.values[index][key] = e;
    if (this.ui.change) {
      this.ui.change(this.values);
    }
  }
}

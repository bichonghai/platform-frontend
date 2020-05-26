import { ControlValueAccessor } from '@angular/forms';
import { Input } from '@angular/core';

export class DefaultControlValueAccessor implements ControlValueAccessor {

  constructor() {
  }

  @Input()
  value;
  onChange: (value: any) => void = () => null;
  onTouched: () => any = () => null;

  registerOnChange(fn: (_: boolean) => {}): void {
    this.onChange = val => {
      fn(this.getModel(val));
    };
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    if (value && this.validate(value)) {
      this.value = this.initModel(value);
    }
  }

  getModel(value: any): any {
    return value;
  }

  validate(value: any): boolean {
    return true;
  }

  initModel(value: any): any {
    return value;
  }
}

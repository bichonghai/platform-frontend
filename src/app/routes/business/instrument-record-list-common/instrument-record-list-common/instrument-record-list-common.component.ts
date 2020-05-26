import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import format from 'date-fns/format';
import { DefaultControlValueAccessor } from '../../../common/component/default-control-value-accessor';

@Component({
  selector: 'app-instrument-record-list-common',
  templateUrl: './instrument-record-list-common.component.html',
  styles: [],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: InstrumentRecordListCommonComponent, multi: true }],
})
export class InstrumentRecordListCommonComponent extends DefaultControlValueAccessor implements OnInit {
  form: FormGroup;
  editIndex = -1;
  editObj = {};
  fromatDate = 'yyyy-MM-dd';

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      items: this.fb.array([]),
    });
  }

  initModel(value: any[]): any {
    value.forEach((i) => {
      const field = this.createUser();
      field.patchValue(i);
      this.items.push(field);
    });
    return value;
  }

  createUser(): FormGroup {
    return this.fb.group({
      name: [null],
      code: [null, [Validators.required]],
      type: [null, [Validators.required]],
      validityDate: [null, [Validators.required]],
      operator: [null, [Validators.required]],
      dataCollation: [null, [Validators.required]],
      dataAnalysis: [null, [Validators.required]],
    });
  }

  get items() {
    return this.form.controls.items as FormArray;
  }

  add() {
    this.items.push(this.createUser());
    this.edit(this.items.length - 1);
  }

  del(index: number) {
    this.items.removeAt(index);
  }

  edit(index: number) {
    if (this.editIndex !== -1 && this.editObj) {
      this.items.at(this.editIndex).patchValue(this.editObj);
    }
    this.editObj = { ...this.items.at(index).value };
    this.editIndex = index;
  }

  save(index: number) {
    const date = this.items.at(index).value['validityDate'];
    if (date instanceof Date) {
      this.items.at(index).value['validityDate'] = format(this.items.at(index).value['validityDate'], this.fromatDate);
    }
    this.items.at(index).markAsDirty();
    if (this.items.at(index).invalid) {
      return;
    }
    this.editIndex = -1;
    this.onChange(this.items.value);
  }

  cancel(index: number) {
    if (!this.items.at(index).value.key) {
      this.del(index);
    } else {
      this.items.at(index).patchValue(this.editObj);
    }
    this.editIndex = -1;
  }

  _submitForm() {
    Object.keys(this.form.controls).forEach((key) => {
      this.form.controls[key].markAsDirty();
      this.form.controls[key].updateValueAndValidity();
    });
    if (this.form.invalid) {
      return;
    }
  }
}

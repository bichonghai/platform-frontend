import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthDynamicLoadRecordEditComponent } from './strength-dynamic-load-record-edit.component';

describe('StrengthDynamicLoadRecordEditComponent', () => {
  let component: StrengthDynamicLoadRecordEditComponent;
  let fixture: ComponentFixture<StrengthDynamicLoadRecordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthDynamicLoadRecordEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthDynamicLoadRecordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

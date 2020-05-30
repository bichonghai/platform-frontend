import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthStaticLoadRecordEditComponent } from './strength-static-load-record-edit.component';

describe('StrengthStaticLoadRecordEditComponent', () => {
  let component: StrengthStaticLoadRecordEditComponent;
  let fixture: ComponentFixture<StrengthStaticLoadRecordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthStaticLoadRecordEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthStaticLoadRecordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

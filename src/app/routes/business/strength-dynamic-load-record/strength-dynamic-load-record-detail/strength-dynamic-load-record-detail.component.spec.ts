import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthDynamicLoadRecordDetailComponent } from './strength-dynamic-load-record-detail.component';

describe('StrengthDynamicLoadRecordDetailComponent', () => {
  let component: StrengthDynamicLoadRecordDetailComponent;
  let fixture: ComponentFixture<StrengthDynamicLoadRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthDynamicLoadRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthDynamicLoadRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

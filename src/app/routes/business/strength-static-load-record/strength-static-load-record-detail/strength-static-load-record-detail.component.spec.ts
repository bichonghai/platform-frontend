import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthStaticLoadRecordDetailComponent } from './strength-static-load-record-detail.component';

describe('StrengthStaticLoadRecordDetailComponent', () => {
  let component: StrengthStaticLoadRecordDetailComponent;
  let fixture: ComponentFixture<StrengthStaticLoadRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthStaticLoadRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthStaticLoadRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

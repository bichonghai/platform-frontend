import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightGaugeRecordDetailComponent } from './height-gauge-record-detail.component';

describe('HeightGaugeRecordDetailComponent', () => {
  let component: HeightGaugeRecordDetailComponent;
  let fixture: ComponentFixture<HeightGaugeRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightGaugeRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightGaugeRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

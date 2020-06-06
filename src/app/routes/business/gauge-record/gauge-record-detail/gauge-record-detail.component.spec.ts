import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeRecordDetailComponent } from './gauge-record-detail.component';

describe('GaugeRecordDetailComponent', () => {
  let component: GaugeRecordDetailComponent;
  let fixture: ComponentFixture<GaugeRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugeRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

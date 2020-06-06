import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeRecordListComponent } from './gauge-record-list.component';

describe('GaugeRecordListComponent', () => {
  let component: GaugeRecordListComponent;
  let fixture: ComponentFixture<GaugeRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugeRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

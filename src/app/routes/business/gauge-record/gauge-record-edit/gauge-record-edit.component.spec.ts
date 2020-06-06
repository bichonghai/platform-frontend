import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeRecordEditComponent } from './gauge-record-edit.component';

describe('GaugeRecordEditComponent', () => {
  let component: GaugeRecordEditComponent;
  let fixture: ComponentFixture<GaugeRecordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugeRecordEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeRecordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

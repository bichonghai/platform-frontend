import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightGaugeRecordEditComponent } from './height-gauge-record-edit.component';

describe('HeightGaugeRecordEditComponent', () => {
  let component: HeightGaugeRecordEditComponent;
  let fixture: ComponentFixture<HeightGaugeRecordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightGaugeRecordEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightGaugeRecordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

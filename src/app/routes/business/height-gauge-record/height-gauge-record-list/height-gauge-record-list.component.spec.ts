import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightGaugeRecordListComponent } from './height-gauge-record-list.component';

describe('HeightGaugeRecordListComponent', () => {
  let component: HeightGaugeRecordListComponent;
  let fixture: ComponentFixture<HeightGaugeRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightGaugeRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightGaugeRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

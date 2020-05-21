import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceRecordDetailComponent } from './device-record-detail.component';

describe('DeviceRecordDetailComponent', () => {
  let component: DeviceRecordDetailComponent;
  let fixture: ComponentFixture<DeviceRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

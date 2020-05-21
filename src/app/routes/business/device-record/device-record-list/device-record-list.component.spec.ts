import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceRecordListComponent } from './device-record-list.component';

describe('DeviceRecordListComponent', () => {
  let component: DeviceRecordListComponent;
  let fixture: ComponentFixture<DeviceRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

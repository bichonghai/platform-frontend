import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceRecordEditComponent } from './device-record-edit.component';

describe('DeviceRecordEditComponent', () => {
  let component: DeviceRecordEditComponent;
  let fixture: ComponentFixture<DeviceRecordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceRecordEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceRecordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

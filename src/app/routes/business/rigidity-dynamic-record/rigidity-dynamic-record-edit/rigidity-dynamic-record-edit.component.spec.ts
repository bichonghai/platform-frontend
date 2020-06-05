import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigidityDynamicRecordEditComponent } from './rigidity-dynamic-record-edit.component';

describe('RigidityDynamicRecordEditComponent', () => {
  let component: RigidityDynamicRecordEditComponent;
  let fixture: ComponentFixture<RigidityDynamicRecordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigidityDynamicRecordEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigidityDynamicRecordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

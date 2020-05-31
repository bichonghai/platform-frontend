import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigidityStaticRecordEditComponent } from './rigidity-static-record-edit.component';

describe('RigidityStaticRecordEditComponent', () => {
  let component: RigidityStaticRecordEditComponent;
  let fixture: ComponentFixture<RigidityStaticRecordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigidityStaticRecordEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigidityStaticRecordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

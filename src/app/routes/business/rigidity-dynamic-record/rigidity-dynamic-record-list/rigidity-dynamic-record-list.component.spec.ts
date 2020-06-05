import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigidityDynamicRecordListComponent } from './rigidity-dynamic-record-list.component';

describe('RigidityDynamicRecordListComponent', () => {
  let component: RigidityDynamicRecordListComponent;
  let fixture: ComponentFixture<RigidityDynamicRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigidityDynamicRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigidityDynamicRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

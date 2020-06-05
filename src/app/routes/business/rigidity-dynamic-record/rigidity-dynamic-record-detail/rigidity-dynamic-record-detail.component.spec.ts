import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigidityDynamicRecordDetailComponent } from './rigidity-dynamic-record-detail.component';

describe('RigidityDynamicRecordDetailComponent', () => {
  let component: RigidityDynamicRecordDetailComponent;
  let fixture: ComponentFixture<RigidityDynamicRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigidityDynamicRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigidityDynamicRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

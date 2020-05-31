import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigidityStaticRecordDetailComponent } from './rigidity-static-record-detail.component';

describe('RigidityStaticRecordDetailComponent', () => {
  let component: RigidityStaticRecordDetailComponent;
  let fixture: ComponentFixture<RigidityStaticRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigidityStaticRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigidityStaticRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

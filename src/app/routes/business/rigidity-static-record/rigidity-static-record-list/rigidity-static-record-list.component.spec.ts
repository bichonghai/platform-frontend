import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigidityStaticRecordListComponent } from './rigidity-static-record-list.component';

describe('RigidityStaticRecordListComponent', () => {
  let component: RigidityStaticRecordListComponent;
  let fixture: ComponentFixture<RigidityStaticRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigidityStaticRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigidityStaticRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

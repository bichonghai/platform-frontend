import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclinationRecordListComponent } from './inclination-record-list.component';

describe('InclinationRecordListComponent', () => {
  let component: InclinationRecordListComponent;
  let fixture: ComponentFixture<InclinationRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclinationRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclinationRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

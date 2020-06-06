import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclinationRecordEditComponent } from './inclination-record-edit.component';

describe('InclinationRecordEditComponent', () => {
  let component: InclinationRecordEditComponent;
  let fixture: ComponentFixture<InclinationRecordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclinationRecordEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclinationRecordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

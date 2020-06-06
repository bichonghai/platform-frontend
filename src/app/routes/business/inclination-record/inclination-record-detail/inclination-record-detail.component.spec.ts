import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclinationRecordDetailComponent } from './inclination-record-detail.component';

describe('InclinationRecordDetailComponent', () => {
  let component: InclinationRecordDetailComponent;
  let fixture: ComponentFixture<InclinationRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclinationRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclinationRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

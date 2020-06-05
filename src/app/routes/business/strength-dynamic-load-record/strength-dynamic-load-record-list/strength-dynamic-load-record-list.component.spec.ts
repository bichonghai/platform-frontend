import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthDynamicLoadRecordListComponent } from './strength-dynamic-load-record-list.component';

describe('StrengthDynamicLoadRecordListComponent', () => {
  let component: StrengthDynamicLoadRecordListComponent;
  let fixture: ComponentFixture<StrengthDynamicLoadRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthDynamicLoadRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthDynamicLoadRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthStaticLoadRecordListComponent } from './strength-static-load-record-list.component';

describe('StrengthStaticLoadRecordListComponent', () => {
  let component: StrengthStaticLoadRecordListComponent;
  let fixture: ComponentFixture<StrengthStaticLoadRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrengthStaticLoadRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthStaticLoadRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

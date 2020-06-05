import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagonalRecordDetailComponent } from './diagonal-record-detail.component';

describe('DiagonalRecordDetailComponent', () => {
  let component: DiagonalRecordDetailComponent;
  let fixture: ComponentFixture<DiagonalRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagonalRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagonalRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

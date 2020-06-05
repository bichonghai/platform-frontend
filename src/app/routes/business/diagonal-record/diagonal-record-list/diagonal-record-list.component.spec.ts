import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagonalRecordListComponent } from './diagonal-record-list.component';

describe('DiagonalRecordListComponent', () => {
  let component: DiagonalRecordListComponent;
  let fixture: ComponentFixture<DiagonalRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagonalRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagonalRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagonalRecordEditComponent } from './diagonal-record-edit.component';

describe('DiagonalRecordEditComponent', () => {
  let component: DiagonalRecordEditComponent;
  let fixture: ComponentFixture<DiagonalRecordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagonalRecordEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagonalRecordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

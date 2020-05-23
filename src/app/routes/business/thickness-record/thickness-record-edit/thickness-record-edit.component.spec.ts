import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThicknessRecordEditComponent } from './thickness-record-edit.component';

describe('ThicknessRecordEditComponent', () => {
  let component: ThicknessRecordEditComponent;
  let fixture: ComponentFixture<ThicknessRecordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThicknessRecordEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThicknessRecordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

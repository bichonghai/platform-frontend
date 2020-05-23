import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThicknessRecordDetailComponent } from './thickness-record-detail.component';

describe('ThicknessRecordDetailComponent', () => {
  let component: ThicknessRecordDetailComponent;
  let fixture: ComponentFixture<ThicknessRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThicknessRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThicknessRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

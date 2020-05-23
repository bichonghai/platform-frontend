import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThicknessSectionPositionEditComponent } from './thickness-section-position-edit.component';

describe('ThicknessSectionPositionEditComponent', () => {
  let component: ThicknessSectionPositionEditComponent;
  let fixture: ComponentFixture<ThicknessSectionPositionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThicknessSectionPositionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThicknessSectionPositionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

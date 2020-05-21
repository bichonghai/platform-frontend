import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardEditComponent } from './standard-edit.component';

describe('StandardEditComponent', () => {
  let component: StandardEditComponent;
  let fixture: ComponentFixture<StandardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

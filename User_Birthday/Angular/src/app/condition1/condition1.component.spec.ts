import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Condition1Component } from './condition1.component';

describe('Condition1Component', () => {
  let component: Condition1Component;
  let fixture: ComponentFixture<Condition1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Condition1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Condition1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

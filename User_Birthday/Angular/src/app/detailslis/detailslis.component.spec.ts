import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailslisComponent } from './detailslis.component';

describe('DetailslisComponent', () => {
  let component: DetailslisComponent;
  let fixture: ComponentFixture<DetailslisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailslisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailslisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietPlansComponent } from './diet-plans.component';

describe('DietPlansComponent', () => {
  let component: DietPlansComponent;
  let fixture: ComponentFixture<DietPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

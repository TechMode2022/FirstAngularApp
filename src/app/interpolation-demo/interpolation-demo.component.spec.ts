import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationDemoComponent } from './interpolation-demo.component';

describe('InterpolationDemoComponent', () => {
  let component: InterpolationDemoComponent;
  let fixture: ComponentFixture<InterpolationDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterpolationDemoComponent]
    });
    fixture = TestBed.createComponent(InterpolationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

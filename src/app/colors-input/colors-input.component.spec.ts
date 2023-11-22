import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsInputComponent } from './colors-input.component';

describe('ColorsInputComponent', () => {
  let component: ColorsInputComponent;
  let fixture: ComponentFixture<ColorsInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorsInputComponent]
    });
    fixture = TestBed.createComponent(ColorsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

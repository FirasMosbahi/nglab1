import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCardBackComponent } from './cv-card-back.component';

describe('CvCardBackComponent', () => {
  let component: CvCardBackComponent;
  let fixture: ComponentFixture<CvCardBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvCardBackComponent]
    });
    fixture = TestBed.createComponent(CvCardBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

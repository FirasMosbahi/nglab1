import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCardFrontComponent } from './cv-card-front.component';

describe('CvCardFrontComponent', () => {
  let component: CvCardFrontComponent;
  let fixture: ComponentFixture<CvCardFrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvCardFrontComponent]
    });
    fixture = TestBed.createComponent(CvCardFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

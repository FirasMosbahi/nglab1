import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEmbauchComponent } from './cv-embauch.component';

describe('CvEmbauchComponent', () => {
  let component: CvEmbauchComponent;
  let fixture: ComponentFixture<CvEmbauchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvEmbauchComponent]
    });
    fixture = TestBed.createComponent(CvEmbauchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

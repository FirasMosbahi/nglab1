import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvMasterDetailsComponent } from './cv-master-details.component';

describe('CvMasterDetailsComponent', () => {
  let component: CvMasterDetailsComponent;
  let fixture: ComponentFixture<CvMasterDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvMasterDetailsComponent]
    });
    fixture = TestBed.createComponent(CvMasterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

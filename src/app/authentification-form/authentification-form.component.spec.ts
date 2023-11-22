import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationFormComponent } from './authentification-form.component';

describe('AuthentificationFormComponent', () => {
  let component: AuthentificationFormComponent;
  let fixture: ComponentFixture<AuthentificationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthentificationFormComponent]
    });
    fixture = TestBed.createComponent(AuthentificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

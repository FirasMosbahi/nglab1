import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOpsComponent } from './rxjs-ops.component';

describe('RxjsOpsComponent', () => {
  let component: RxjsOpsComponent;
  let fixture: ComponentFixture<RxjsOpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsOpsComponent]
    });
    fixture = TestBed.createComponent(RxjsOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

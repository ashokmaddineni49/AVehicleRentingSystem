import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyamicFooterContentComponent } from './dyamic-footer-content.component';

describe('DyamicFooterContentComponent', () => {
  let component: DyamicFooterContentComponent;
  let fixture: ComponentFixture<DyamicFooterContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DyamicFooterContentComponent]
    });
    fixture = TestBed.createComponent(DyamicFooterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

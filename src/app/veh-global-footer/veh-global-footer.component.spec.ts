import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehGlobalFooterComponent } from './veh-global-footer.component';

describe('VehGlobalFooterComponent', () => {
  let component: VehGlobalFooterComponent;
  let fixture: ComponentFixture<VehGlobalFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehGlobalFooterComponent]
    });
    fixture = TestBed.createComponent(VehGlobalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

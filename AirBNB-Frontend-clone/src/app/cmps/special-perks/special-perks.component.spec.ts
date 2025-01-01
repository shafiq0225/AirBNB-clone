import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPerksComponent } from './special-perks.component';

describe('SpecialPerksComponent', () => {
  let component: SpecialPerksComponent;
  let fixture: ComponentFixture<SpecialPerksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialPerksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialPerksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

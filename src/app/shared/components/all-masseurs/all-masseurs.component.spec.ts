import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMasseursComponent } from './all-masseurs.component';

describe('AllMasseursComponent', () => {
  let component: AllMasseursComponent;
  let fixture: ComponentFixture<AllMasseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMasseursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMasseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

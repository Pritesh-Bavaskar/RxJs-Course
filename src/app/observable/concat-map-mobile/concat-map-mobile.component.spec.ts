import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMapMobileComponent } from './concat-map-mobile.component';

describe('ConcatMapMobileComponent', () => {
  let component: ConcatMapMobileComponent;
  let fixture: ComponentFixture<ConcatMapMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatMapMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatMapMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

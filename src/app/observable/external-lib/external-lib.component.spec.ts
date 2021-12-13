import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalLibComponent } from './external-lib.component';

describe('ExternalLibComponent', () => {
  let component: ExternalLibComponent;
  let fixture: ComponentFixture<ExternalLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

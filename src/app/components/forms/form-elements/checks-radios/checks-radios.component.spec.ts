import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksRadiosComponent } from './checks-radios.component';

describe('ChecksRadiosComponent', () => {
  let component: ChecksRadiosComponent;
  let fixture: ComponentFixture<ChecksRadiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecksRadiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChecksRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

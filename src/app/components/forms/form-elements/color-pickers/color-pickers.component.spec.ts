import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickersComponent } from './color-pickers.component';

describe('ColorPickersComponent', () => {
  let component: ColorPickersComponent;
  let fixture: ComponentFixture<ColorPickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorPickersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorPickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

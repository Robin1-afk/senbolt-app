import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEasyTableComponent } from './ngx-easy-table.component';

describe('NgxEasyTableComponent', () => {
  let component: NgxEasyTableComponent;
  let fixture: ComponentFixture<NgxEasyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxEasyTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxEasyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

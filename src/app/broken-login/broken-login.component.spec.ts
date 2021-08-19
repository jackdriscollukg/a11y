import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokenLoginComponent } from './broken-login.component';

describe('BrokenLoginComponent', () => {
  let component: BrokenLoginComponent;
  let fixture: ComponentFixture<BrokenLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokenLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokenLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

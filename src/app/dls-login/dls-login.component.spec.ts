import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlsLoginComponent } from './dls-login.component';

describe('DlsLoginComponent', () => {
  let component: DlsLoginComponent;
  let fixture: ComponentFixture<DlsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlsLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DlsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

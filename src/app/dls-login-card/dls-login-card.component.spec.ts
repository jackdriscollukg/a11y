import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlsLoginCardComponent } from './dls-login-card.component';

describe('DlsLoginCardComponent', () => {
  let component: DlsLoginCardComponent;
  let fixture: ComponentFixture<DlsLoginCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlsLoginCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DlsLoginCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

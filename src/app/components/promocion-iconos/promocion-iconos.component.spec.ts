import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionIconosComponent } from './promocion-iconos.component';

describe('PromocionIconosComponent', () => {
  let component: PromocionIconosComponent;
  let fixture: ComponentFixture<PromocionIconosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionIconosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromocionIconosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

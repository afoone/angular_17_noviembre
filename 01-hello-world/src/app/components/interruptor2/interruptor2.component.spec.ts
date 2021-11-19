import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interruptor2Component } from './interruptor2.component';

describe('Interruptor2Component', () => {
  let component: Interruptor2Component;
  let fixture: ComponentFixture<Interruptor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interruptor2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interruptor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterruptorComponent } from './interruptor.component';

describe('InterruptorComponent', () => {
  let component: InterruptorComponent;
  let fixture: ComponentFixture<InterruptorComponent>;

  beforeAll(() => {
    console.log('before all');
  });

  beforeEach(async () => {
    // configurar el módulo
    await TestBed.configureTestingModule({
      declarations: [InterruptorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    // a través de TestBed - > crea un componente
    fixture = TestBed.createComponent(InterruptorComponent);
    // crea una instancia de este componente
    component = fixture.componentInstance;
    // obligando a detectar los cambios
    fixture.detectChanges();
  });

  it('should create Interruptor', () => {
    expect(component).toBeTruthy();
  });

  it('dummy test', () => {
    expect(true).toBe(true);
    expect(true).toBeTruthy();
    expect(1).toBeTruthy();
    expect('').toBeFalsy();
    expect(0).toBeFalsy();
    expect(1 < 3).toBe(true);
    expect({}).toBeTruthy();
    expect([]).toBeTruthy();
    expect(undefined).toBeFalsy();
  });

  it('la luz al empezar debe estar apagada', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled);
    expect(compiled.querySelector('div')?.textContent).toContain('off');
  });

  it('al darle click la primera vez, la luz se enciende', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled);
    compiled.querySelector('button')?.click();
    fixture.detectChanges();
    expect(compiled.querySelector('div')?.textContent).toContain('on');
  });

  it('si la luz estaba encendida, se apaga', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    component.luz = 'on';
    compiled.querySelector('button')?.click();
    fixture.detectChanges();
    expect(compiled.querySelector('div')?.textContent).toContain('off');
  });

  it('si la luz estaba apagada, se enciende', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    component.luz = 'off';
    compiled.querySelector('button')?.click();
    fixture.detectChanges();
    expect(compiled.querySelector('div')?.textContent).toContain('on');
  });
});

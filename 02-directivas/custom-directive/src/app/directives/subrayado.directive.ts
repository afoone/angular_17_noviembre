import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[imaginaSubrayado]',
})
export class SubrayadoDirective implements OnInit {

  @Input('imaginaSubrayado')
  color: string | undefined = 'green';

  private _el: ElementRef;
  private _originalText: string = "";

  constructor(_el: ElementRef) {
    console.log(_el);
    this._el = _el;

  }

  ngOnInit(): void {
    console.log(this.color);
    this._originalText = this._el.nativeElement.innerText
    console.log(this._originalText)
    // this._el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseenter')
  onMouseEnter():void {
    this._el.nativeElement.style.backgroundColor = this.color;
    this._el.nativeElement.innerText = this._el.nativeElement.innerText.toUpperCase()
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this._el.nativeElement.style.backgroundColor = 'white'
    this._el.nativeElement.innerText = this._originalText
  }
}

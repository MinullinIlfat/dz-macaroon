import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[bgButton]'
})
export class BgButtonDirective implements OnInit {

  @HostListener('mouseover')
  bgHover() {
    this.changeElementBgColor('linear-gradient(90deg, #040479 0%, #9f9ff7)')
  }
  @HostListener('mouseout')
  outHover() {
    this.changeElementBgColor('linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)')
  }

  constructor(private el: ElementRef,
              private rend: Renderer2) {

  }

  ngOnInit() {
    this.changeElementBgColor('linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)')
  }

  changeElementBgColor(color: string) {
    this.rend.setStyle(this.el.nativeElement, 'background-image', color);
  }
}

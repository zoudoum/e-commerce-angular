import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  etat=false;

  
  @HostBinding('style.background') background: string;

  @HostListener('mouseenter') onMouseEnter() {

    
    
    this.renderer.addClass(this.el.nativeElement, 'focused');
  
  }

  @HostListener('mouseleave') onMouseLeave() {
    
    this.renderer.removeClass(this.el.nativeElement, 'focused');
  }
  

  
}

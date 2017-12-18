// Element Ref is for reffering elements
// Directive is used for directive meta tag and decorator
// host listner is for detect the events
// this directive will work as attribute
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
  }

  // on mouse enter change element color
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }

  // on mouse leave change element color
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('green');
  }

  // highlight color
  highlight = (color: string): void => {
    this.el.nativeElement.style.color = color;
  }
}

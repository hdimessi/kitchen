import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  el: ElementRef;

  @HostListener('click') toggleOpen() {
    const BreakException = {};
    try {
      this.el.nativeElement.childNodes.forEach(element => {
        const ele: Element = element;
        if (ele.classList.contains('dropdown-menu')) {
          ele.classList.toggle('show');
          throw BreakException;
        }
      });
    } catch (e) {
      if (e !== BreakException) { throw e; }
    }
  }

  constructor(el: ElementRef) {
    this.el = el;
  }
}

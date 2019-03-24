import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective {
  el: ElementRef;

  @HostListener('click') toggleOpen() {
    this.el.nativeElement.parentElement.childNodes.forEach(element => {
      const ele: Element = element;
      if (ele.classList.contains('navbar-collapse')) {
        ele.classList.toggle('collapse');
        ele.classList.toggle('collapsed');
        setTimeout(() => {
          ele.classList.toggle('show');
          setTimeout(() => {
            ele.classList.toggle('collapse');
            ele.classList.toggle('collapsed');
          }, 400);
        }, 1);
      }
    });
  }

  constructor(el: ElementRef) {
    this.el = el;
  }
}

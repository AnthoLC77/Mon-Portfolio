import { AfterViewInit, Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appSlideInAnimate]',
    standalone: true
})
export class SlideInAnimateDirective implements AfterViewInit {

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {}

    ngAfterViewInit(): void {
      if (typeof IntersectionObserver !== 'undefined') {

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              this.renderer.addClass(element, 'animate');
              observer.unobserve(element);
            }
          });
        }, { threshold: 0.5 });

        const slideInElements = this.el.nativeElement.querySelectorAll('.slide-in-skill');

        if (slideInElements.length > 0) {
          slideInElements.forEach((el: HTMLElement) => {
            observer.observe(el);
          });
        } else {
          observer.observe(this.el.nativeElement);
        }
      }
    }

}

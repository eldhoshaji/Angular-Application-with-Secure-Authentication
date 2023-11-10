import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[lineClamp]'
})
export class LineClampDirective implements OnChanges {
  @Input() lineClamp: number = 0; // Number of lines to truncate to

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    const lines = this.lineClamp || 3; // Default to 1 line if not specified

    this.renderer.setStyle(this.el.nativeElement, '-webkit-line-clamp', lines.toString());
    this.renderer.setStyle(this.el.nativeElement, 'display', '-webkit-box');
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.el.nativeElement, 'text-overflow', 'ellipsis');
    this.renderer.setStyle(this.el.nativeElement, '-webkit-box-orient', 'vertical');
  }
}

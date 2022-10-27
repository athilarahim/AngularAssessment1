import { Directive, Input, Renderer2, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover')
  onMouseOver() {
    let change=this.el.nativeElement
    this.renderer.setStyle(change,'background-color','blue')
    this.renderer.setStyle(change,'color','white')

  }

  @HostListener('mouseout')
  onMouseOut() {
    let change=this.el.nativeElement
    this.renderer.setStyle(change,'background-color','')
    this.renderer.setStyle(change,'color','')
 
  }
  ngOnInit(): void {
   
  }
}

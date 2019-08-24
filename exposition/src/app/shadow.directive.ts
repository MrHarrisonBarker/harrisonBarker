import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[Shadow]'
})
export class ShadowDirective {

  constructor ( private element : ElementRef , private renderer : Renderer2 )
	{
		this.setElevation('shadow-sm');
	}
	
	ngOnChanges() {
		this.setElevation('shadow-sm');
	}

	@HostListener('mouseenter')
	onMouseEnter() {
		this.setElevation('shadow');
	}

	@HostListener('mouseleave')
	onMouseLeave() {
		this.setElevation('shadow-sm');
	}
	
	
	setElevation(amount: string) {
		const classesToRemove = Array.from((<HTMLElement>this.element.nativeElement).classList).filter(c => c.startsWith('shadow'));
		classesToRemove.forEach((c) => {
			this.renderer.removeClass(this.element.nativeElement, c);
		});

		const newClass = `${amount}`;
		this.renderer.addClass(this.element.nativeElement, newClass);
	}

}

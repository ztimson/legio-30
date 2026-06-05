import {Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

@Directive({selector: '[inView]'})
export class InViewDirective implements OnInit, OnDestroy {
	@Output() inView = new EventEmitter<void>();
	private observer!: IntersectionObserver;

	constructor(private el: ElementRef) {}

	ngOnInit() {
		this.observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				this.inView.emit();
				this.observer.disconnect();
			}
		}, {rootMargin: '200px'});

		this.observer.observe(this.el.nativeElement);
	}

	ngOnDestroy() {
		this.observer.disconnect();
	}
}

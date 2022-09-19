import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, Subscription} from 'rxjs';

@Component({
	selector: 'xxx-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
	private sub!: Subscription;

	@Input() hamburger = true;

	@Output() hamburgerClick = new EventEmitter<void>();

	constructor(private route: ActivatedRoute) { }

	ngAfterViewInit() {
		this.sub = this.route.fragment.subscribe(frag => {
			if(frag) this.scroll(frag);
		});
	}

	ngOnDestroy(): void {
		if(this.sub) this.sub.unsubscribe();
	}

	scroll(id: string) {
		const el = document.getElementById(id);
		if(el) el.scrollIntoView({behavior: 'smooth'});
		else setTimeout(() => this.scroll(id), 500);
	}
}

import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, Subscription} from 'rxjs';
import {NAVIGATION} from '../../misc/navigation';

@Component({
	selector: 'xxx-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
	private sub!: Subscription;

	links = {
		topLevel: NAVIGATION[0].children[0],
		other: NAVIGATION.slice(1)
	}

	@Input() hamburger = true;

	@Output() hamburgerClick = new EventEmitter<void>();

	constructor(private route: ActivatedRoute) { }

	ngAfterViewInit() {
		this.sub = this.route.fragment.subscribe(frag => {
			console.log('fire');
			if(frag) this.scroll(frag);
			else this.scroll('top');
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

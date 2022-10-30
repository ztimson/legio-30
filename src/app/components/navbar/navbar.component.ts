import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {combineLatest, filter, Subscription} from 'rxjs';
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

	constructor(private route: ActivatedRoute, private router: Router) { }

	ngAfterViewInit() {
		this.sub = combineLatest([this.router.events.pipe(filter(e => e instanceof NavigationEnd)), this.route.fragment]).subscribe(([url, frag]) => {
			if(frag) this.scroll(frag);
			else this.scrollTop();
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

	scrollTop() {
		const container = document.getElementsByClassName('app-container')[0];
		container.scrollTo(0, 0);
	}
}

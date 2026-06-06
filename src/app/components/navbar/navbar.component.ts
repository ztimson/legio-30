import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {combineLatest, filter, Subscription} from 'rxjs';
import {NAVIGATION, NavigationItem} from '../../misc/navigation';
import {MomentumService} from '../../services/momentum.service';

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

	constructor(private route: ActivatedRoute, private router: Router, public momentum: MomentumService) { }

	ngAfterViewInit() {
		this.sub = combineLatest([this.router.events.pipe(filter((e: any) => e.navigationTrigger != 'popstate' || e instanceof NavigationStart)), this.route.fragment]).subscribe(([url, frag]) => {
			if(frag) this.scroll(frag);
			else this.scrollTop();
		});
	}

	ngOnDestroy(): void {
		if(this.sub) this.sub.unsubscribe();
	}

	openAdmin() {
		location.href = '/ui';
	}

	openItem(item: NavigationItem) {
		// Full url
		if(item.url.startsWith('http'))
			location.href = item.url;
		// Relative
		else
			this.router.navigate([item.url], {fragment: item.fragment});
	}

	scroll(id: string) {
		const el = document.getElementById(id);
		if(el) el.scrollIntoView({behavior: 'smooth'});
		else setTimeout(() => this.scroll(id), 500);
	}

	scrollTop() {
		window.scrollTo(0, 0);
	}
}

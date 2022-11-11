import {Injectable, OnDestroy} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';

@Injectable({providedIn: 'root'})
export class TitleService implements OnDestroy {
	private readonly orgTitle: string = 'LEGIO · XXX';

	private routeSub?: Subscription;
	private titleSub?: Subscription;

	get title(): string {
		const title = this._title.getTitle();
		if(title.includes(this.orgTitle) && title.length > this.orgTitle.length)
			return title.substring(this.orgTitle.length);
		return this._title.getTitle();
	}
	set title(title: string | null) {
		if(!title) this._title.setTitle(this.orgTitle);
		else this._title.setTitle(`${this.orgTitle} | ${title}`);
}

	constructor(private router: Router,
				private route: ActivatedRoute,
				private _title: Title
	) {
		// this.orgTitle = this.title; // Hardcoding because HMR breaks this
		this.routeSub = this.router.events
			.pipe(filter(e => e instanceof NavigationEnd))
			.subscribe(() => this.getTitleFromRoute());
		this.getTitleFromRoute();
	}

	private async getTitleFromRoute() {
		if(this.titleSub) this.titleSub.unsubscribe();
		let route = this.route, title = route.snapshot.data['title'];
		while (route.firstChild) {
			route = route.firstChild;
			if(route.snapshot.data['title']) title = route.snapshot.data['title'];
		}
		if(title instanceof Observable) { this.titleSub = title.subscribe(t => this.title = t); }
		else { this.title = title; }
	}

	ngOnDestroy() {
		if(this.routeSub) this.routeSub.unsubscribe();
		if(this.titleSub) this.titleSub.unsubscribe();
	}
}

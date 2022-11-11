import {Injectable, OnDestroy, Optional} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import {combineLatest, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {TitleService} from './title.service';

@Injectable({providedIn: 'root'})
export class AnalyticsService implements OnDestroy {
	private sub?: Subscription;

	constructor(@Optional() private analyticsService: GoogleAnalyticsService,
				private router: Router,
				private title: TitleService
	) {
		if(this.analyticsService) {
			combineLatest([
				this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
			]).subscribe(([navigation]) => {
				this.analyticsService.pageView(navigation.urlAfterRedirects, this.title.title);
			});
		}
	}

	log(action: string, category?: string, label?: string, value?: any, interaction?: boolean) {
		if(!this.analyticsService) return;
		return this.analyticsService.event(action, category, label, value, interaction);
	}

	ngOnDestroy() {
		if(this.sub) this.sub.unsubscribe();
	}
}

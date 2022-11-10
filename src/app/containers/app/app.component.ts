import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {combineLatest, filter, Subscription} from 'rxjs';
import {BreakpointService} from '../../services/breakpoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	private sub?: Subscription;

	mobile = false;
	open = false;

	constructor(private breakpoint: BreakpointService, private router: Router) {
		this.sub = combineLatest([
			router.events.pipe(filter(event => event instanceof NavigationEnd)),
			breakpoint.isMobile$
		]).subscribe(([event, mobile]) => {
			this.mobile = mobile;
			this.open = !this.mobile;
		})
	}

	ngOnDestroy() {
		if(this.sub) this.sub.unsubscribe();
	}
}

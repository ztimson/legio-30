import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';
import { LocalStorage } from 'webstorage-decorators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	mobile = false;
	open = false;

	constructor(private router: Router, route: ActivatedRoute, breakpointObserver: BreakpointObserver) {
		router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => this.open = false);
		breakpointObserver.observe(['(max-width: 750px)']).subscribe(result => {
			this.mobile = result.matches;
			this.open = !this.mobile;
		})
	}

}

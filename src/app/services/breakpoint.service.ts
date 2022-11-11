import {Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class BreakpointService {
	private _isMobile?: boolean;
	get isMobile() { return !!this.isMobile$; }
	isMobile$ = this.breakpointObserver.observe([Breakpoints.XSmall]).pipe(
		map(e => e.matches),
		tap(e => this._isMobile = e)
	);

	constructor(private breakpointObserver: BreakpointObserver) {  }
}

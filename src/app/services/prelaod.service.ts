import {Injectable} from '@angular/core';
import {AnalyticsService} from './analytics.service';
import {BreakpointService} from './breakpoint.service';
import {TitleService} from './title.service';

@Injectable({providedIn: 'root'})
export class PrelaodService {
	constructor(private analytics: AnalyticsService,
				private breakpoint: BreakpointService,
				private title: TitleService
	) { }
}

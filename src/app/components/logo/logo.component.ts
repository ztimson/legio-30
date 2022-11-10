import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
	selector: 'xxx-logo',
	templateUrl: './logo.component.html',
	animations: [
		trigger('slide', [
			state('expand', style({width: '*'})),
			state('shrink', style({width: '0px'})),
			transition('* => *', [animate('0.5s')])
		]),
		trigger('margin', [
			state('expand', style({marginLeft: '0.25rem'})),
			state('shrink', style({marginLeft: '0'})),
			transition('* => *', [animate('0.5s')])
		])
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {
	@Input() expand = true;
	@Input() loading = false;
	@Input() loadingText = '';

	dots: Observable<string>;

	constructor() {
		this.dots = timer(0, 1000).pipe(map(i => {
			return Array(i % 4).fill('.').join('');
		}));
	}
}

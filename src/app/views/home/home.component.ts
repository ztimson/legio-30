import {Component} from '@angular/core';
import {NAVIGATION} from '../../misc/navigation';

@Component({
	selector: 'xxx-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {
	navigation = NAVIGATION;
}

import {Component} from '@angular/core';
import {NAVIGATION} from '../../misc/navigation';

@Component({
	selector: 'xxx-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
	navigation = NAVIGATION;
}

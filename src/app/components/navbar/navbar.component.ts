import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	selector: 'xxx-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
	@Input() hamburger = true;

	@Output() hamburgerClick = new EventEmitter<void>();
}

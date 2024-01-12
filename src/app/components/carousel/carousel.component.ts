import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Photo} from '../models/photo';

@Component({
	selector: 'xxx-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnDestroy, OnInit, AfterViewInit {
	private timer?: any;

	loading = true;

	@Input() background = true;
	@Input() photos: Photo[] = [];
	@Input() speed = 5000;
	@Input() pause = false;
	@Input() disableAutoplay = false;
	@Input() index = ~~(Math.random() * this.photos.length);
	@Input() height = '100%';

	ngOnInit() {
		if(this.disableAutoplay) this.pause = true;
	}

	ngAfterViewInit() {
		this.timer = setInterval(() => {
			if(!this.pause) this.next(false);
		}, this.speed);
	}

	ngOnDestroy() {
		if(this.timer) {
			clearInterval(this.timer);
			this.timer = null;
		}
	}

	next(pause = true) {
		this.loading = true;
		this.pause = pause;
		this.index++;
		if(this.index >= this.photos.length) this.index = 0;
	}

	previous(pause = true) {
		this.loading = true;
		this.pause = pause;
		this.index = this.index > 0 ? this.index - 1 : this.photos.length - 1;
	}
}

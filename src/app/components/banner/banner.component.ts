import {
	AfterViewInit,
	Component,
	HostListener,
	Input,
	OnDestroy,
	OnInit
} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {shuffle} from '../../misc/utils';

@Component({
	selector: 'xxx-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements AfterViewInit, OnDestroy, OnInit {
	private container!: HTMLDivElement;
	private dimmensions!: [number, number];
	private sub?: Subscription;

	images = [
		'/assets/img/banner/aquilifer.jpg',
		'/assets/img/banner/centurio.jpg',
		'/assets/img/banner/formation.jpg',
		'/assets/img/banner/ROM.jpg',
		'/assets/img/banner/shield.jpg',
		'/assets/img/banner/testudo.jpg',
		'/assets/img/banner/tripod.jpg',
	];
	selected  = 0;

	@Input() speed = 5000;
	@Input() manual = false;

	constructor() {
		this.images = shuffle(this.images);
	}

	ngOnInit() {
		this.sub = interval(this.speed)
			.subscribe( i => {
				if(this.manual) return;
 				this.selected = i % this.images.length
			});
	}

	@HostListener('window:resize')
	ngAfterViewInit() {
		this.container = <HTMLDivElement>document.getElementsByClassName('banner-container')[0];
		this.dimmensions = [this.container.clientWidth, this.container.clientHeight];
	}

	ngOnDestroy() {
		if(this.sub) this.sub.unsubscribe();
	}

	next() {
		this.manual = true;
		this.selected++;
		if(this.selected >= this.images.length) this.selected = 0;
	}

	previous() {
		this.manual = true;
		this.selected--;
		if(this.selected < 0) this.selected = this.images.length - 1;
	}
}

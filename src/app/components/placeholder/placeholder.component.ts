import {Component, Input} from '@angular/core';

@Component({
	selector: 'xxx-placeholder',
	styles: [`
		.placeholder {
			position: relative;
			background-color: #bbbbbb;
			background: linear-gradient(to right, #eeeeee 8%, #bbbbbb 18%, #eeeeee 33%);
			background-size: 400% 100%;
			min-height: 100px;
			min-width: 200px;

			animation-duration: 3s;
			animation-fill-mode: forwards;
			animation-iteration-count: infinite;
			animation-name: placeHolderShimmer;
			animation-timing-function: linear;

			@keyframes placeHolderShimmer {
				0% {
					background-position: 200% 0;
				}
				100% {
					background-position: -200% 0;
				}
			}
		}
	`],
	template: `
		<div *ngIf="loading" class="placeholder" [style.height]="height" [style.width]="width"></div>
		<img [src]="src" [alt]="alt" [style]="style" [style.height]="height" [style.width]="width" loading="lazy" (load)="loading = false" />
	`
})
export class PlaceholderComponent {
	loading = true;

	@Input() alt?: string;
	@Input() src!: string;
	@Input() style!: string;
	@Input() height: string = 'auto';
	@Input() width: string = 'auto';
}

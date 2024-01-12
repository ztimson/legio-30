import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Photo} from '../models/photo';

export interface ImageViewerOptions {
	photos: Photo[],
	index?: number;
}

@Component({
	selector: 'xxx-viewer',
	styles: [`
		.close {
			position: absolute;
			top: 1rem;
			right: 1rem;
			z-index: 100000;
		}
		::ng-deep .cdk-overlay-pane {
			max-width: 100% !important;
		}
		::ng-deep mat-dialog-container {
			padding: 0 !important;
		}
	`],
	template: `
		<button class="close" mat-icon-button aria-label="close dialog" mat-dialog-close>
			<mat-icon>close</mat-icon>
		</button>
		<xxx-carousel [photos]="photos" [index]="index" [disableAutoplay]="true"></xxx-carousel>
	`
})
export class ImageViewerComponent {
	index!: number;
	photos!: Photo[];

	constructor(public ref: MatDialogRef<ImageViewerComponent>, @Inject(MAT_DIALOG_DATA) data: ImageViewerOptions) {
		this.index = data.index || 0;
		this.photos = data.photos || [];
	}
}

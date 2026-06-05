import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MomentumService} from '../../services/momentum.service';
import {Photo} from '../models/photo';

export interface ImageViewerOptions {
	photos: Photo[],
	index?: number;
}

@Component({
	selector: 'xxx-viewer',
	styles: [`
		.close, .delete {
			position: absolute;
			top: 1rem;
			z-index: 100000;
		}
		.close { right: 1rem; }
		.delete { right: 4rem; }
		::ng-deep .cdk-overlay-pane {
			max-width: 100% !important;
		}
		::ng-deep mat-dialog-container {
			padding: 0 !important;
		}
	`],
	template: `
		<button class="close" mat-icon-button mat-dialog-close>
			<mat-icon>close</mat-icon>
		</button>
		<button *ngIf="momentum.admin | async" class="delete me-3" mat-icon-button (click)="delete()">
			<mat-icon>delete</mat-icon>
		</button>
		<xxx-carousel [photos]="photos" [index]="index" [disableAutoplay]="true" (indexChange)="index = $event"></xxx-carousel>
	`
})
export class ImageViewerComponent {
	index!: number;
	photos!: Photo[];

	constructor(
		public ref: MatDialogRef<ImageViewerComponent>,
		public momentum: MomentumService,
		@Inject(MAT_DIALOG_DATA) data: ImageViewerOptions
	) {
		this.index = data.index || 0;
		this.photos = data.photos || [];
	}

	async delete() {
		if (!confirm('Delete this photo?')) return;
		const photo = this.photos[this.index];
		await this.momentum.api.storage.delete(photo.path);
		this.ref.close({deleted: photo});
	}
}

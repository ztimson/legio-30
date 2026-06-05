import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MomentumService} from '../../services/momentum.service';

@Component({
	selector: 'xxx-uploader',
	templateUrl: './uploader.component.html',
})
export class UploaderComponent {
	year: number = new Date().getFullYear();
	years: number[] = Array.from({length: this.year - 2006}, (_, i) => 2007 + i).reverse();
	uploading = false;

	constructor(private momentum: MomentumService, private ref: MatDialogRef<UploaderComponent>) {}

	async upload() {
		this.uploading = true;
		await this.momentum.api.storage.upload(`Photos/Submissions/${this.year}`, undefined, {multiple: true, accept: 'image/*'});
		this.ref.close();
	}
}

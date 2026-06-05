import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MomentumService} from '../../services/momentum.service';
import {ImageViewerComponent} from '../../components/image-viewer/image-viewer.component';
import {Photo} from '../../components/models/photo';

type Album = {album: string, photos: Photo[], loaded: boolean};

@Component({
	selector: 'xxx-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
	photos: Album[] = [];

	constructor(private dialog: MatDialog, public momentum: MomentumService) {}

	uploadYears = Array.from({length: new Date().getFullYear() - 2006}, (_, i) => 2007 + i).reverse();

	async upload(year: number) {
		await this.momentum.api.storage.upload(`Photos/Gallery/${year}`, undefined, {multiple: true, accept: 'image/*'});
		await this.loadAlbums();
	}

	async ngOnInit() {
		await this.loadAlbums();
	}

	async loadAlbums() {
		const files = await this.momentum.api.storage.all('Photos/Gallery');
		const albumMap = new Map<string, null>();

		for (const file of files.filter((f: any) => f.mime !== 'directory')) {
			const album = file.path.split('/')[3];
			albumMap.set(album, null);
		}

		this.photos = [...albumMap.keys()]
			.sort((a, b) => +b - +a)
			.map(album => ({album, photos: [], loaded: false}));
	}

	async loadAlbum(album: Album) {
		if (album.loaded) return;
		album.loaded = true;

		const files = await this.momentum.api.storage.all(`Photos/Gallery/${album.album}`);
		album.photos = files
			.filter((f: any) => f.mime !== 'directory')
			.map((file: any) => ({
				alt: file.name,
				src: this.momentum.api.storage.open(file.path, false) as string,
				path: file.path
			}));
	}

	get flatten() {
		return this.photos.reduce((acc: Photo[], album) => [...acc, ...album.photos], []);
	}

	open(photo: Photo) {
		const flat = this.flatten;
		const index = flat.findIndex(p => p.src === photo.src);
		this.dialog.open(ImageViewerComponent, {
			width: '100%',
			height: '100%',
			autoFocus: false,
			data: {index, photos: flat}
		}).afterClosed().subscribe(result => {
			if (result?.deleted) this.loadAlbums();
		});
	}
}

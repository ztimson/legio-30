import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ImageViewerComponent} from '../../components/image-viewer/image-viewer.component';
import {Photo} from '../../components/models/photo';

@Component({
	selector: 'xxx-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
	photos: {album: string, photos: Photo[]}[] = [
		{album: '2023', photos: [
			{alt: '', src: '/assets/img/gallery/2023/001.jpg'},
			{alt: '', src: '/assets/img/gallery/2023/002.jpg'},
			{alt: '', src: '/assets/img/gallery/2023/003.jpg'},
			{alt: '', src: '/assets/img/gallery/2023/004.jpg'},
			{alt: '', src: '/assets/img/gallery/2023/005.jpg'},
			{alt: '', src: '/assets/img/gallery/2023/006.jpg'},
			{alt: '', src: '/assets/img/gallery/2023/007.jpg'},
			{alt: '', src: '/assets/img/gallery/2023/008.jpg'},
			{alt: '', src: '/assets/img/gallery/2023/009.jpg'},
			{alt: '', src: '/assets/img/gallery/2023/010.jpg'},
			{alt: '', src: '/assets/img/gallery/2023/011.jpg'},
		]}, {album: '2022', photos: [
			{alt: '', src: '/assets/img/gallery/2022/001.jpg'},
			{alt: '', src: '/assets/img/gallery/2022/002.jpg'},
			{alt: '', src: '/assets/img/gallery/2022/003.jpg'},
			{alt: '', src: '/assets/img/gallery/2022/004.jpg'},
			{alt: '', src: '/assets/img/gallery/2022/005.jpg'},
			{alt: '', src: '/assets/img/gallery/2022/006.jpg'},
			{alt: '', src: '/assets/img/gallery/2022/007.jpg'},
			{alt: '', src: '/assets/img/gallery/2022/008.jpg'},
			{alt: '', src: '/assets/img/gallery/2022/009.jpg'},
			{alt: '', src: '/assets/img/gallery/2022/010.jpg'},
			{alt: '', src: '/assets/img/gallery/2022/011.jpg'},
			{alt: '', src: '/assets/img/gallery/2022/012.jpg'},
			{alt: '', src: '/assets/img/gallery/2022/013.jpg'},
			{alt: '', src: '/assets/img/gallery/2022/014.jpg'},
			{alt: '', src: '/assets/img/gallery/2022/015.jpg'},
			{alt: '', src: '/assets/img/gallery/2022/016.jpg'},
			{alt: '', src: '/assets/img/gallery/2022/017.jpg'},
		]}, {album: '2021', photos: [
			{alt: '', src: '/assets/img/gallery/2021/001.jpg'},
			{alt: '', src: '/assets/img/gallery/2021/002.jpg'},
			{alt: '', src: '/assets/img/gallery/2021/003.jpg'},
			{alt: '', src: '/assets/img/gallery/2021/004.jpg'},
			{alt: '', src: '/assets/img/gallery/2021/005.jpg'},
		]}, {album: '2019', photos: [
			{alt: '', src: '/assets/img/gallery/2019/001.jpg'},
			{alt: '', src: '/assets/img/gallery/2019/002.jpg'},
			{alt: '', src: '/assets/img/gallery/2019/003.jpg'},
			{alt: '', src: '/assets/img/gallery/2019/004.jpg'},
		]}, {album: '2018', photos: [
			{alt: '', src: '/assets/img/gallery/2018/001.jpg'},
			{alt: '', src: '/assets/img/gallery/2018/002.jpg'},
			{alt: '', src: '/assets/img/gallery/2018/003.jpg'},
			{alt: '', src: '/assets/img/gallery/2018/004.jpg'},
			{alt: '', src: '/assets/img/gallery/2018/005.jpg'},
			{alt: '', src: '/assets/img/gallery/2018/006.jpg'},
			{alt: '', src: '/assets/img/gallery/2018/007.jpg'},
			{alt: '', src: '/assets/img/gallery/2018/008.jpg'},
		]}, {album: '2017', photos: [
			{alt: '', src: '/assets/img/gallery/2017/001.jpg'},
			{alt: '', src: '/assets/img/gallery/2017/002.jpg'},
			{alt: '', src: '/assets/img/gallery/2017/003.jpg'},
			{alt: '', src: '/assets/img/gallery/2017/004.jpg'},
			{alt: '', src: '/assets/img/gallery/2017/005.jpg'},
			{alt: '', src: '/assets/img/gallery/2017/006.jpg'},
			{alt: '', src: '/assets/img/gallery/2017/007.jpg'},
		]}, {album: '2016', photos: [
			{alt: '', src: '/assets/img/gallery/2016/001.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/002.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/003.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/004.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/005.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/006.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/007.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/008.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/009.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/010.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/011.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/012.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/013.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/014.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/015.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/016.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/017.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/018.jpg'},
			{alt: '', src: '/assets/img/gallery/2016/019.jpg'},
		]}, {album: '2014', photos: [
			{alt: '', src: '/assets/img/gallery/2014/001.jpg'},
			{alt: '', src: '/assets/img/gallery/2014/002.jpg'},
			{alt: '', src: '/assets/img/gallery/2014/003.jpg'},
			{alt: '', src: '/assets/img/gallery/2014/004.jpg'},
			{alt: '', src: '/assets/img/gallery/2014/005.jpg'},
			{alt: '', src: '/assets/img/gallery/2014/006.jpg'},
			{alt: '', src: '/assets/img/gallery/2014/007.jpg'},
			{alt: '', src: '/assets/img/gallery/2014/008.jpg'},
			{alt: '', src: '/assets/img/gallery/2014/009.jpg'},
			{alt: '', src: '/assets/img/gallery/2014/010.jpg'},
		]}, {album: '2013', photos: [
			{alt: '', src: '/assets/img/gallery/2013/001.jpg'},
			{alt: '', src: '/assets/img/gallery/2013/002.jpg'},
			{alt: '', src: '/assets/img/gallery/2013/003.jpg'},
			{alt: '', src: '/assets/img/gallery/2013/004.jpg'},
			{alt: '', src: '/assets/img/gallery/2013/005.jpg'},
			{alt: '', src: '/assets/img/gallery/2013/006.jpg'},
		]}, {album: '2012', photos: [
			{alt: '', src: '/assets/img/gallery/2012/001.jpg'},
			{alt: '', src: '/assets/img/gallery/2012/002.jpg'},
			{alt: '', src: '/assets/img/gallery/2012/003.jpg'},
			{alt: '', src: '/assets/img/gallery/2012/004.jpg'},
			{alt: '', src: '/assets/img/gallery/2012/005.jpg'},
			{alt: '', src: '/assets/img/gallery/2012/006.jpg'},
			{alt: '', src: '/assets/img/gallery/2012/007.jpg'},
			{alt: '', src: '/assets/img/gallery/2012/008.jpg'},
			{alt: '', src: '/assets/img/gallery/2012/009.jpg'},
			{alt: '', src: '/assets/img/gallery/2012/010.jpg'},
			{alt: '', src: '/assets/img/gallery/2012/011.jpg'},
			{alt: '', src: '/assets/img/gallery/2012/012.jpg'},
			{alt: '', src: '/assets/img/gallery/2012/013.jpg'},
			{alt: '', src: '/assets/img/gallery/2012/014.jpg'},
			{alt: '', src: '/assets/img/gallery/2012/015.jpg'},
			{alt: '', src: '/assets/img/gallery/2012/016.jpg'},
		]}, {album: '2011', photos: [
			{alt: '', src: '/assets/img/gallery/2011/001.jpg'},
			{alt: '', src: '/assets/img/gallery/2011/002.jpg'},
			{alt: '', src: '/assets/img/gallery/2011/003.jpg'},
			{alt: '', src: '/assets/img/gallery/2011/004.jpg'},
			{alt: '', src: '/assets/img/gallery/2011/005.jpg'},
			{alt: '', src: '/assets/img/gallery/2011/006.jpg'},
		]}, {album: '2010', photos: [
			{alt: '', src: '/assets/img/gallery/2010/001.jpg'},
			{alt: '', src: '/assets/img/gallery/2010/002.jpg'},
			{alt: '', src: '/assets/img/gallery/2010/003.jpg'},
			{alt: '', src: '/assets/img/gallery/2010/004.jpg'},
			{alt: '', src: '/assets/img/gallery/2010/005.jpg'},
			{alt: '', src: '/assets/img/gallery/2010/006.jpg'},
			{alt: '', src: '/assets/img/gallery/2010/007.jpg'},
			{alt: '', src: '/assets/img/gallery/2010/008.jpg'},
			{alt: '', src: '/assets/img/gallery/2010/009.jpg'},
			{alt: '', src: '/assets/img/gallery/2010/010.jpg'},
			{alt: '', src: '/assets/img/gallery/2010/011.jpg'},
			{alt: '', src: '/assets/img/gallery/2010/012.jpg'},
			{alt: '', src: '/assets/img/gallery/2010/013.jpg'},
		]}, {album: '2009', photos: [
			{alt: '', src: '/assets/img/gallery/2009/001.jpg'},
			{alt: '', src: '/assets/img/gallery/2009/002.jpg'},
			{alt: '', src: '/assets/img/gallery/2009/003.jpg'},
			{alt: '', src: '/assets/img/gallery/2009/004.jpg'},
			{alt: '', src: '/assets/img/gallery/2009/005.jpg'},
			{alt: '', src: '/assets/img/gallery/2009/006.jpg'},
			{alt: '', src: '/assets/img/gallery/2009/007.jpg'},
			{alt: '', src: '/assets/img/gallery/2009/008.jpg'},
			{alt: '', src: '/assets/img/gallery/2009/009.jpg'},
			{alt: '', src: '/assets/img/gallery/2009/010.jpg'},
			{alt: '', src: '/assets/img/gallery/2009/011.jpg'},
			{alt: '', src: '/assets/img/gallery/2009/012.jpg'},
		]}, {album: '2008', photos: [
			{alt: '', src: '/assets/img/gallery/2008/001.jpg'},
			{alt: '', src: '/assets/img/gallery/2008/002.jpg'},
			{alt: '', src: '/assets/img/gallery/2008/003.jpg'},
			{alt: '', src: '/assets/img/gallery/2008/004.jpg'},
			{alt: '', src: '/assets/img/gallery/2008/005.jpg'},
			{alt: '', src: '/assets/img/gallery/2008/006.jpg'},
			{alt: '', src: '/assets/img/gallery/2008/007.jpg'},
			{alt: '', src: '/assets/img/gallery/2008/008.jpg'},
		]}, {album: '2007', photos: [
			{alt: '', src: '/assets/img/gallery/2007/001.jpg'},
			{alt: '', src: '/assets/img/gallery/2007/002.jpg'},
			{alt: '', src: '/assets/img/gallery/2007/003.jpg'},
			{alt: '', src: '/assets/img/gallery/2007/004.jpg'},
			{alt: '', src: '/assets/img/gallery/2007/005.jpg'},
			{alt: '', src: '/assets/img/gallery/2007/006.jpg'},
		]}];

	constructor(private dialog: MatDialog) {}

	get flatten() {
		return this.photos.reduce((acc: any[], album) => {
			return [...acc, ...album.photos];
		}, []);
	}

	open(photo: any) {
		const flat = this.flatten;
		const index = flat.findIndex(p => p.src == photo.src);
		this.dialog.open(ImageViewerComponent, {
			width: '100%',
			height: '100%',
			autoFocus: false,
			data: {index, photos: flat}
		});
	}
}

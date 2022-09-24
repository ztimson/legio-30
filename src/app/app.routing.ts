import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FourOFourComponent} from './views/404/404.component';
import {GalleryComponent} from './views/gallery/gallery.component';
import {HomeComponent} from './views/home/home.component';

const routes: Routes = [
	{path: '', pathMatch: 'full', component: HomeComponent},
	{path: 'gallery', component: GalleryComponent},
	{path: '**', component: FourOFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FourOFourComponent} from './views/404/404.component';
import {AboutComponent} from './views/about/about.component';
import {AestivaComponent} from './views/events/aestiva/aestiva.component';
import {CalendarComponent} from './views/events/calendar/calendar.component';
import {HibernaComponent} from './views/events/hiberna/hiberna.component';
import {GalleryComponent} from './views/gallery/gallery.component';
import {HomeComponent} from './views/home/home.component';
import {DrillComponent} from './views/reenact/drill/drill.component';
import {GettingStartedComponent} from './views/reenact/getting-started/getting-started.component';
import {RulesComponent} from './views/reenact/rules/rules.component';

const routes: Routes = [
	{path: '', pathMatch: 'full', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'drill', component: DrillComponent},
	{path: 'events/aestiva', component: AestivaComponent},
	{path: 'events/hiberna', component: HibernaComponent},
	{path: 'events/calendar', component: CalendarComponent},
	{path: 'gallery', component: GalleryComponent},
	{path: 'getting-started', component: GettingStartedComponent},
	{path: 'rules', component: RulesComponent},
	{path: '**', component: FourOFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FourOFourComponent} from './views/404/404.component';
import {AboutComponent} from './views/about/about.component';
import {AestivaComponent} from './views/events/aestiva/aestiva.component';
import {AgoniumComponent} from './views/events/agonium/agonium.component';
import {CalendarComponent} from './views/events/calendar/calendar.component';
import {HibernaComponent} from './views/events/hiberna/hiberna.component';
import {GalleryComponent} from './views/gallery/gallery.component';
import {HomeComponent} from './views/home/home.component';
import {DrillComponent} from './views/reenact/drill/drill.component';
import {GettingStartedComponent} from './views/reenact/getting-started/getting-started.component';
import {RulesComponent} from './views/reenact/rules/rules.component';

const routes: Routes = [
	{path: '', pathMatch: 'full', component: HomeComponent},
	{path: 'about', component: AboutComponent, data: {title: 'About'}},
	{path: 'drill', component: DrillComponent, data: {title: 'Drill Commands'}},
	{path: 'events/aestiva', component: AestivaComponent, data: {title: 'Castra Aestiva'}},
	{path: 'events/agonium', component: AgoniumComponent, data: {title: 'Agonium'}},
	{path: 'events/hiberna', component: HibernaComponent, data: {title: 'Castra Hiberna'}},
	{path: 'events/calendar', component: CalendarComponent, data: {title: 'Calendar'}},
	{path: 'gallery', component: GalleryComponent, data: {title: 'Gallery'}},
	{path: 'getting-started', component: GettingStartedComponent, data: {title: 'Getting Started'}},
	{path: 'rules', component: RulesComponent, data: {title: 'Rules & Regulations'}},
	{path: '**', component: FourOFourComponent, data: {title: '404'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }

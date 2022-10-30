import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FourOFourComponent} from './views/404/404.component';
import {CalendarComponent} from './views/events/calendar/calendar.component';
import {GalleryComponent} from './views/gallery/gallery.component';
import {HomeComponent} from './views/home/home.component';
import {GettingStartedComponent} from './views/reenact/getting-started/getting-started.component';
import {RulesComponent} from './views/reenact/rules/rules.component';

const routes: Routes = [
	{path: '', pathMatch: 'full', component: HomeComponent},
	{path: 'calendar', component: CalendarComponent},
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

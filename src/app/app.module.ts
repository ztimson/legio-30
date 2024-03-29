import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgxGoogleAnalyticsModule} from 'ngx-google-analytics';
import {environment} from '../environments/environment';
import {AppRouting} from './app.routing';
import {BannerComponent} from './components/banner/banner.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {ContactComponent} from './components/contact/contact.component';
import {FooterComponent} from './components/footer/footer.component';
import {ImageViewerComponent} from './components/image-viewer/image-viewer.component';
import {LogoComponent} from './components/logo/logo.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {PlaceholderComponent} from './components/placeholder/placeholder.component';
import {AppComponent} from './containers/app/app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {PrelaodService} from './services/prelaod.service';
import {FourOFourComponent} from './views/404/404.component';
import {AboutComponent} from './views/about/about.component';
import {AestivaComponent} from './views/events/aestiva/aestiva.component';
import {AgoniumComponent} from './views/events/agonium/agonium.component';
import {CalendarComponent} from './views/events/calendar/calendar.component';
import {HibernaComponent} from './views/events/hiberna/hiberna.component';
import {GalleryComponent} from './views/gallery/gallery.component';
import {HomeComponent} from './views/home/home.component';
import {DiyComponent} from './views/reenact/diy/diy.component';
import {DrillComponent} from './views/reenact/drill/drill.component';
import {GettingStartedComponent} from './views/reenact/getting-started/getting-started.component';
import {MaintenanceComponent} from './views/reenact/maintinance/maintenance.component';
import {RulesComponent} from './views/reenact/rules/rules.component';
import {BuyComponent} from './views/reenact/buy/buy.component';
import {ResourcesComponent} from './views/resources/resources.component';

export const APP_COMPONENTS: any[] = [
	AboutComponent,
	AestivaComponent,
	AgoniumComponent,
	AppComponent,
	BannerComponent,
	BuyComponent,
	CalendarComponent,
	CarouselComponent,
	ContactComponent,
	DiyComponent,
	DrillComponent,
	FooterComponent,
	FourOFourComponent,
	GalleryComponent,
	GettingStartedComponent,
	HibernaComponent,
	HomeComponent,
	ImageViewerComponent,
	LogoComponent,
	MaintenanceComponent,
	NavbarComponent,
	PlaceholderComponent,
	ResourcesComponent,
	RulesComponent,
]

export const APP_IMPORTS: any[] = [
	AppRouting,
	BrowserAnimationsModule,
	BrowserModule,
	ReactiveFormsModule,
	MaterialModule
]

if(environment.analytics && (<any>environment.analytics) != '{{ANALYTICS}}')
	APP_IMPORTS.push(NgxGoogleAnalyticsModule.forRoot(<any>environment.analytics));

@NgModule({
  declarations: APP_COMPONENTS,
  imports: APP_IMPORTS,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
	constructor(preload: PrelaodService) { }
}

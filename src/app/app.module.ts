import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app.routing';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { AppComponent } from './containers/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {HomeComponent} from './views/home/home.component';

export const APP_COMPONENTS = [
	AppComponent,
	HomeComponent,
	FooterComponent,
	NavbarComponent
]

@NgModule({
  declarations: APP_COMPONENTS,
  imports: [
	  BrowserModule,
	  AppRouting,
	  BrowserAnimationsModule,
	  MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

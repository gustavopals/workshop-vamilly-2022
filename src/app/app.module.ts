import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PeopleComponent } from './pages/people/people/people.component';
import { HomeComponent } from './pages/home/home/home.component';
import { SharedModule } from './modules/shared/shared.module';
import { PagesModule } from './modules/pages/pages.module';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';

@NgModule({
	declarations: [
		AppComponent,
  DashboardComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		PoModule,
		SharedModule,
		PagesModule,
		RouterModule.forRoot([]),
		PoTemplatesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

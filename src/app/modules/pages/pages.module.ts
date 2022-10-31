import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PeopleModule } from './people/people.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		HomeModule,
		PeopleModule
	]
})
export class PagesModule { }

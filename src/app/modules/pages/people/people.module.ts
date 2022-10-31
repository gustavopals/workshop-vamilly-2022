import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PeopleComponent } from 'src/app/pages/people/people/people.component';


@NgModule({
	declarations: [
		PeopleComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		PeopleRoutingModule
	]
})
export class PeopleModule { }

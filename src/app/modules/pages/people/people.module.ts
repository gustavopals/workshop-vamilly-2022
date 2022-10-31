import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PeopleComponent } from 'src/app/pages/people/people/people.component';
import { PeopleViewComponent } from 'src/app/pages/people/people-view/people-view.component';
import { PeopleFormComponent } from 'src/app/pages/people/people-form/people-form.component';


@NgModule({
	declarations: [
		PeopleComponent,
		PeopleViewComponent,
		PeopleFormComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		PeopleRoutingModule
	]
})
export class PeopleModule { }

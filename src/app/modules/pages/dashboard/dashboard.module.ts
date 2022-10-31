import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard/dashboard.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
	declarations: [
		DashboardComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		DashboardRoutingModule
	]
})
export class DashboardModule { }

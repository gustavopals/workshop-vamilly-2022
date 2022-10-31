import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'people',
		loadChildren: () => import('../app/modules/pages/people/people.module').then(m => m.PeopleModule)
	},
	{
		path: 'home',
		loadChildren: () => import('../app/modules/pages/home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'dashboard',
		loadChildren: () => import('../app/modules/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
	},
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

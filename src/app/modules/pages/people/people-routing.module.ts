import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleFormComponent } from 'src/app/pages/people/people-form/people-form.component';
import { PeopleViewComponent } from 'src/app/pages/people/people-view/people-view.component';
import { PeopleComponent } from 'src/app/pages/people/people/people.component';

const routes: Routes = [
	{ path: '', component: PeopleComponent },
	{ path: 'view/:id', component: PeopleViewComponent },
	{ path: 'edit/:id', component: PeopleFormComponent },
	{ path: 'new', component: PeopleFormComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PeopleRoutingModule { }

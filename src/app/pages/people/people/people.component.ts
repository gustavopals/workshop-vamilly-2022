import { Component, OnInit } from '@angular/core';
import { PoPageDynamicTableActions, PoPageDynamicTableField } from '@po-ui/ng-templates';

@Component({
	selector: 'app-people',
	templateUrl: './people.component.html',
	styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	readonly actions: PoPageDynamicTableActions = {
		detail: 'people/view/:id',
		edit: 'people/edit/:id',
		new: 'people/new',
		remove: true,
	};

	readonly fields: Array<PoPageDynamicTableField> = [
		{ property: 'id', key: true },
		{ property: 'name', label: 'Nome' },
		{ property: 'birthdate', label: 'Data de nascimento', type: 'date' },
	];

}

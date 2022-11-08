import { Component, OnInit } from '@angular/core';
import { PoGaugeRanges } from '@po-ui/ng-components';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	avatar = 'https://picsum.photos/144/144';

	contact = {
		name: 'Gustavo André Pals',
		email: 'gustavo.pals@vamilly.com.br',
		phone: '42999365350'
	};

	salesRanges: Array<PoGaugeRanges> = [
		{ from: 0, to: 50, label: 'Sales reduction', color: '#c64840' },
		{ from: 50, to: 75, label: 'Average sales', color: '#ea9b3e' },
		{ from: 75, to: 100, label: 'Sales soared', color: '#00b28e' }
	];

	turnoverRanges: Array<PoGaugeRanges> = [
		{ from: 0, to: 50, label: 'Low rate', color: '#00b28e' },
		{ from: 50, to: 75, label: 'Average rate', color: '#ea9b3e' },
		{ from: 75, to: 100, label: 'High rate', color: '#c64840' }
	  ];

	callContact(phone) {
		window.open(`tel:${phone}`, '_self');
	}

	sendContact(email) {
		window.open(`mailto:${email}`, '_self');
	}

	formatPhoneNumber(phone) {
		return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`;
	}
}

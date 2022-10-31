import { Component, OnInit } from '@angular/core';

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

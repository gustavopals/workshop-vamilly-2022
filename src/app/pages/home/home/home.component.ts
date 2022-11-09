import { Component, OnInit } from '@angular/core';
import { PoGaugeRanges, PoTableColumn } from '@po-ui/ng-components';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	avatar = 'assets/img/unnamed.webp';

	contact = {
		name: 'Gustavo André Pals',
		email: 'gustavo.pals@vamilly.com.br',
		phone: '42999365350'
	};

	mediaHoras: Array<PoGaugeRanges> = [
		{ from: 0, to: 50, label: 'Redução', color: '#c64840' },
		{ from: 50, to: 75, label: 'Média Atual', color: '#ea9b3e' },
		{ from: 75, to: 100, label: 'Aumento', color: '#00b28e' }
	];

	mediaHorasNaoFaturadas: Array<PoGaugeRanges> = [
		{ from: 0, to: 50, label: 'Excelente', color: '#00b28e' },
		{ from: 50, to: 75, label: 'OK', color: '#ea9b3e' },
		{ from: 75, to: 100, label: 'Atenção', color: '#c64840' }
	];

	columns: Array<PoTableColumn> = [
		{ property: 'Periodo', label: 'Periodo' },
		{
			property: 'Cliente', type: 'label', label: 'Cliente', labels: [
				{ value: 'Makita', color: 'color-07', label: 'Makita' },
				{ value: 'Vamilly', color: 'color-01', label: 'Vamilly' },
				{ value: 'VPereck', color: 'color-02', label: 'VPereck' },
				{ value: 'DHL', color: 'color-08', label: 'DHL' }
			]
		},
		{ property: 'Projeto', label: 'Projeto' },
		{ property: 'Horas', label: 'Horas' },
	]

	listaTabela: Array<any> = [
		{
			Periodo: 'Abr/2022',
			Cliente: 'Makita',
			Projeto: 'Projeto A',
			Horas: '99 Horas',
		},
		{
			Periodo: 'Abr/2022',
			Cliente: 'Vamilly',
			Projeto: 'Projeto B',
			Horas: '99 Horas',
		},
		{
			Periodo: 'Abr/2022',
			Cliente: 'VPereck',
			Projeto: 'Projeto C',
			Horas: '99 Horas',
		},
		{
			Periodo: 'Abr/2022',
			Cliente: 'DHL',
			Projeto: 'Projeto D',
			Horas: '99 Horas',
		},
		{
			Periodo: 'Mai/2022',
			Cliente: 'Makita',
			Projeto: 'Projeto A',
			Horas: '99 Horas',
		},
		{
			Periodo: 'Mai/2022',
			Cliente: 'Vamilly',
			Projeto: 'Projeto B',
			Horas: '99 Horas',
		}
	]

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

import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	readonly menus: Array<PoMenuItem> = [
		{ label: 'Home', link: '/home', icon: 'po-icon-home', shortLabel: 'Home' },
		{ label: 'Pessoas', link: '/people', icon: 'po-icon-users', shortLabel: 'Pessoas' },
		{ label: 'Dashboard', link: '/dashboard', icon: 'po-icon-eye', shortLabel: 'Dashboard' }
	];

	logo: any = '/assets/img/logo-vamilly-custom.png'
	shortLogo: any = '/assets/img/logo-vamilly-short.png'

	private onClick() {
		alert('Clicked in menu item')
	}

}

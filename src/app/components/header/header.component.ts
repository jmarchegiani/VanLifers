import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	isAuthenticated : boolean;

	constructor(public OktaAuth : OktaAuthService) {
		this.OktaAuth.$authenticationState.subscribe(
			(isAuthenticated : boolean) => this.isAuthenticated = this.isAuthenticated
		);
	}

	ngOnInit() {
		this.OktaAuth.isAuthenticated().then((auth) => {this.isAuthenticated = auth})
	};

	login() {
		this.OktaAuth.loginRedirect();
	}

	logout() {
		this.OktaAuth.logout('/');
	}
}

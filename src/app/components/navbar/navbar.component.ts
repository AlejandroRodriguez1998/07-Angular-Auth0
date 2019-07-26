import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  private auth0Client: Auth0Client;

  constructor(private auth: AuthService ) { }

  ngOnInit() {
  }

  async login() {
    await this.auth0Client.loginWithRedirect(this.auth.config);
  }

}

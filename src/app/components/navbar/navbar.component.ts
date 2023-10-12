import { Component } from '@angular/core';

// Import the module from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(public auth: AuthService) {}

  login(){
    this.auth.loginWithRedirect();
  }
  
}

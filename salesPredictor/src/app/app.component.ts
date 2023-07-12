import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login: boolean = false;
  constructor(
    private authService: AuthService,
  ) {
    if (this.authService.loggedIn == "true") {
      console.log(this.authService.loggedIn);
      this.login = true;
    }
  }
  signIn(): void {
  }

  logOut(): void {
    this.authService.logOut(); { }

  }

}

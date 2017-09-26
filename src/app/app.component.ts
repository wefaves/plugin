import {Component, OnInit} from '@angular/core';
import { TokenService } from './services/token.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.tokenService.getCookies(environment.web_app_endpoint, "token", (key) => {
      this.tokenService.setToken(key);

      if (!this.tokenService.token) {
        window.open(environment.web_app_endpoint+'/#/account/login');
      }
    });
  }

  public open() {
    window.open(environment.web_app_endpoint);
  }

  public settings() {
    window.open(environment.web_app_endpoint+'/#/account/profile');
  }
}

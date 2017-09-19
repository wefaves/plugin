import {Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  constructor(private http: Http, private tokenService: TokenService) { }

  ngOnInit() {
    this.tokenService.getCookies("http://wefaves.com/", "token", (key) => {
      this.tokenService.setToken(key);
    });
  }

  public open(event) {
    window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/');
  }

  public settings(event) {
    window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/account');
  }
}

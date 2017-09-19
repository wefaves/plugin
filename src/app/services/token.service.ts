import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from "../../environments/environment";

@Injectable()
export class TokenService {

  token: string;

  constructor(private http: Http) { }

  setToken(value) {
    this.token = value;
  }

  public getValueToken() {
    return (this.token);
  }

  public getCookies(domain, name, callback) {
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
      if (callback) {
        callback(cookie ? cookie.value : null);
      }
    });
  }

  public getToken() {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.token});
    return new RequestOptions({ headers: headers });
  }

}

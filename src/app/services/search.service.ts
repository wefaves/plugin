import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from "../../environments/environment";

@Injectable()
export class SearchService {

  cookie: string;

  constructor(private http: Http) { }

  private getToken() {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.cookie});
    return new RequestOptions({ headers: headers });
  }

  public  setCookie(key) {
    console.log(key);
    this.cookie = key;
  }

  public  getCookie() {
    return this.cookie;
  }

}

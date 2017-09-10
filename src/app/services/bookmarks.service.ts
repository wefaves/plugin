import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from "../../environments/environment";

@Injectable()
export class BookmarksService {

  cookie: string;

  constructor(private http: Http) { }

  getBookmarks() {
    return this.http.get('https://api.wefaves.com/users/self/favorite', this.getToken())
      .map((response: Response) => response.json())
  }

  addBookmarks(bookmarks) {
    return this.http.post('https://api.wefaves.com/users/self/favorite', bookmarks, this.getToken())
      .map((response: Response) => response.json())
  }

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

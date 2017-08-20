import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from "../../environments/environment";

@Injectable()
export class BookmarksService {

  constructor(private http: Http) { }

  getBookmarks(key) {
    return this.http.get('https://api.wefaves.com/users/self/favorite', this.getToken(key))
      .map((response: Response) => response.json())
  }

  addBookmarks(bookmarks, key) {
    return this.http.post('https://api.wefaves.com/users/self/favorite', bookmarks, this.getToken(key))
      .map((response: Response) => response.json())
  }

  private getToken(key) {
    let headers = new Headers({ 'Authorization': 'Bearer ' + key});
    return new RequestOptions({ headers: headers });
  }

}

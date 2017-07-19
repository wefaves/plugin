import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from "../../environments/environment";

@Injectable()
export class HistoryService {

  constructor(private http: Http) { }

  getHistory(key) {
    return this.http.get('https://api.wefaves.com/users/self/history', this.getToken(key))
      .map((response: Response) => response.json())
  }

  addHistory(history, key) {
    return this.http.post('https://api.wefaves.com/users/self/history', history, this.getToken(key))
      .map((response: Response) => response.json())
  }

  private getToken(key) {
    let headers = new Headers({ 'Authorization': 'Bearer ' + key});
    return new RequestOptions({ headers: headers });
  }
}

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {ApiService} from "./api.service";
import {History} from "../models/history";

@Injectable()
export class HistoryService {

  constructor(private apiService: ApiService) {}

  getUserHistory(): Promise<[History]> {
    return new Promise((resolve, reject) => {
      this.apiService.getRequest('/users/self/history')
        .subscribe(
          data => resolve(History.ParseFromObjectToArray(data)),
          error => reject(<any>error));
    });
  }

  postHistory(history: {}): Promise<[History]> {
    return new Promise((resolve, reject) => {
      this.apiService.postRequest('/users/self/history', history)
        .subscribe(
          data => resolve(History.ParseFromObjectToArray(data)),
          error => reject(<any>error));
    });
  }
}

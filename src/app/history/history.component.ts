import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';
import { History } from '../models/history';
import { TokenService } from '../services/token.service';

import { logger } from "codelyzer/util/logger";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})

export class HistoryComponent implements OnInit {

  private history: Array<History> =  new Array<History>();
  currentHistory: any = [];
  difference: any = [];
  key: string;

  constructor(private historyService: HistoryService, private tokenService: TokenService) { }

  ngOnInit() {
    this.tokenService.getCookies("http://wefaves.com/", "token", (key) => {
      this.tokenService.setToken(key);
      this.getUserHistory();
    });
  }

  getUserHistory() {
    let query = { text: '', maxResults: 5000 };
    this.historyService.getUserHistory().then(
      (history) => {
        this.history = history;
        this.getCurrentHistory(query, (currentHistory) => {
          this.compareHistory(this.history, currentHistory);
        });
      }
    ).catch(
      (err) => { }
    );
  }

  private addDiffence() {
    for (let i of this.difference) {
      const history = {
        itemId: i.id,
        title: i.title,
        lastVisitTime: i.lastVisitTime,
        typedCount: String(i.typedCount),
        url: i.url,
        visitCount: String(i.visitCount)
      };
      if (history.title == "") {
        history.title = history.url;
      }
      this.historyService.postHistory(history).then(
        (value) => {
          //
        });
      }
    }

    private compareHistory(history, currentHistory) {
      this.difference = [];
      for (let i of currentHistory) {
        let value = 0;
        for (let j of history) {
          if (i.title == j.title) {
            value = 1;
          }
        }
        if (value == 0) {
          this.difference.push(i);
          value = 0;
        }
      }
      this.addDiffence();
    }

    private getCurrentHistory(query, callback) {
      chrome.history.search(query, function (results) {
        if (callback) {
          callback(results);
        }
      });
    }

  }

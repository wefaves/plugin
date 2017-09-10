import {Component, OnInit} from '@angular/core';
import {HistoryService} from '../services/history.service';
import {logger} from "codelyzer/util/logger";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})

export class HistoryComponent implements OnInit {

  history: any = [];
  currentHistory: any = [];
  difference: any = [];
  key: string;

  constructor(private historyService: HistoryService) {
  }

  ngOnInit() {
    // this.getCookies("http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/", "currentUser", (key) => {
    //   this.key = key;
    //   this.loadHistory(key);
    // });
  }

  loadHistory(key) {
    let query = {
      text: '',
      maxResults: 100
    };
    this.historyService.getHistory(key)
      .subscribe(
        history => {
          this.history = history;
          // this.getCurrentHistory(query, (currentHistory) => {
          //   this.compareHistory(this.history, currentHistory);
          // });
        });
  }

  private addDiffence() {
    for (let i of this.difference) {
      this.historyService.addHistory(i, this.key)
        .subscribe(
          value => {
            console.log(value);
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

  // private getCurrentHistory(query, callback) {
  //   chrome.history.search(query, function (results) {
  //     if (callback) {
  //       callback(results);
  //     }
  //   });
  // }
  //
  // private getCookies(domain, name, callback) {
  //   chrome.cookies.get({"url": domain, "name": name}, function (cookie) {
  //     if (callback) {
  //       callback(cookie ? cookie.value : null);
  //     }
  //     if (!cookie) {
  //       window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/account/login');
  //     }
  //   });
  // }

}

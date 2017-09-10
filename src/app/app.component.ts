import {Component, OnInit} from '@angular/core';
import { HistoryService } from "./services/history.service";
import { Http } from '@angular/http';
import { Bookmark } from "./model/bookmark";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HistoryService]
})

export class AppComponent implements OnInit {

  constructor(private http: Http, private historyService: HistoryService) {
    chrome.bookmarks.getTree(function (tree) {
      const bookmarks = Bookmark.ParseFromObjectToArray(tree);
      //console.log(bookmarks);
    });
  }

  ngOnInit() {
  }

  public open(event) {
    window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/');
  }

  public settings(event) {
    window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/account');
  }

  public desconnect(event) {
    chrome.cookies.remove({"url": "http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/account", "name": "currentUser"}, function(cookie) {

    });

    window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/account/login');
  }



  private getCookies(domain, name, callback) {
    chrome.cookies.get({"url": domain, "name": name}, function (cookie) {
      if (callback) {
        callback(cookie ? cookie.value : null);
      }
      if (!cookie) {
        window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/');
      }
    });
  }

  save(event) {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
      const tab = tabs[0];

      chrome.bookmarks.create({'parentId': "1",
        'title': tab.title,
        'url': tab.url});
    });
  }
}

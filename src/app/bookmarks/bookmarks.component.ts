import { Component, OnInit } from '@angular/core';
import { BookmarksService } from  "../services/bookmarks.service";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  bookmarks: any = [];
  difference: any = [];
  key: string;

  constructor(private bookmarksService: BookmarksService) {
  }

  ngOnInit() {

    this.getCookies("http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/", "currentUser", (key) => {
      this.key = key;
      this.loadBookmarks(key);
    });
  }

  loadBookmarks(key) {
    let x = 0;
    let query = {
      url: ''
    };
      this.bookmarksService.getBookmarks(key)
        .subscribe(
          bookmarks => {
            this.bookmarks = bookmarks;
            this.getCurrentBookmarks(query, (currentBookmarks) => {
              this.compareBookmarks(this.bookmarks, currentBookmarks);
            });
          },
          error => {
          });

  }

  private addDiffence() {
    for (let i of this.difference) {
      this.bookmarksService.addBookmarks(i, this.key)
        .subscribe(
          value => {
            //console.log(value);
          });
    }
  }

  private compareBookmarks(bookmarks, currentBookmarks) {
    this.difference = [];
    let value = 0;
    for (let i of currentBookmarks) {
      value = 0;
      for (let j of bookmarks) {
        if (i.url == j.url) {
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

  private getCurrentBookmarks(query, callback) {

    chrome.bookmarks.getChildren('1', function (results) {
      if (callback) {
          callback(results);
        }
    });
  }

  private getCookies(domain, name, callback) {
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
        if (callback) {
          callback(cookie ? cookie.value : null);
        }
        if (!cookie) {
          window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/');
        }
    });
}

}

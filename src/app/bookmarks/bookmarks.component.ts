import { Component, OnInit } from '@angular/core';
import { BookmarksService } from  "../services/bookmarks.service";
import { GlobalTokenService } from '../services/global-token.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html'
})
export class BookmarksComponent implements OnInit {

  bookmarks: any = [];
  difference: any = [];

  constructor(private bookmarksService: BookmarksService) { }

  ngOnInit() {

    this.getCookies("http://wefaves.com/", "token", (key) => {
      this.bookmarksService.setCookie(key);
      this.synchroFolder();
      // this.loadBookmarks();
    });
  }

  public  synchroFolder() {
    chrome.bookmarks.getTree((bookmarks) => {
      if (this.getFolders(bookmarks) == 1) {
        //this.getBookmarks(bookmarks);
      }
    });
  }

  private  getFolders(folders) {
  let data = {};
  for (let i = 0; i < folders.length; i++) {
      if (folders[i].children) {
        for (let x = 0; x < folders[i].children.length; x++) {
            if (folders[i].children[x]['dateGroupModified'])
              {
                data = {
                  itemId: folders[i].children[x]['id'],
                	title: folders[i].children[x]['title'],
                	dateGroupModified: folders[i].children[x]['dateGroupModified'],
                	parentId: folders[i].children[x]['parentId'],
                	dateAdded: folders[i].children[x]['dateAdded'],
                	indexPos: folders[i].children[x]['index']
                };
                this.bookmarksService.addFolder(data)
                  .subscribe(
                    value => {
                      this.getFolders(folders[i].children);
                    },
                    error => {
                      console.log(error);
                    });
              }
        }
        // this.getFolders(folders[i].children);
      }
  }
  return 1;
}

private  getBookmarks(bookmarks) {
  for (var i =0; i < bookmarks.length; i++) {
        var bookmark = bookmarks[i];
        if (bookmark.url) {
            console.log(bookmark.dateAdded);
            console.log(bookmark.id);
            console.log(bookmark.index);
            console.log(bookmark.parentId);
            console.log(bookmark.title);
            console.log(bookmark.url);
        }

        if (bookmark.children) {
            this.getBookmarks(bookmark.children);
        }
    }
}

  loadBookmarks() {
    let x = 0;
    let query = {
      url: ''
    };
      this.bookmarksService.getBookmarks()
        .subscribe(
          bookmarks => {
            this.bookmarks = bookmarks;
            console.log(bookmarks);
            // this.getCurrentBookmarks(query, (currentBookmarks) => {
            //   this.compareBookmarks(this.bookmarks, currentBookmarks);
            // });
          },
          error => {
          });
  }

  // private addDiffence() {
  //   for (let i of this.difference) {
  //     this.bookmarksService.addBookmarks(i)
  //       .subscribe(
  //         value => {
  //           //console.log(value);
  //         });
  //   }
  // }

  // private compareBookmarks(bookmarks, currentBookmarks) {
  //   this.difference = [];
  //   let value = 0;
  //   for (let i of currentBookmarks) {
  //     value = 0;
  //     for (let j of bookmarks) {
  //       if (i.url == j.url) {
  //         value = 1;
  //       }
  //     }
  //     if (value == 0) {
  //       this.difference.push(i);
  //       value = 0;
  //     }
  //   }
  //   this.addDiffence();
  // }

//   private getCurrentBookmarks(query, callback) {
//
//     chrome.bookmarks.getChildren('1', function (results) {
//       if (callback) {
//           callback(results);
//         }
//     });
//   }
//
  private getCookies(domain, name, callback) {
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
        if (callback) {
          callback(cookie ? cookie.value : null);
        }
        /*if (!cookie) {
          window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/account/login');
        }*/
    });
}

}

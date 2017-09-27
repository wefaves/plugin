import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../services/bookmarks.service';
import { Bookmark } from '../models/bookmark';
import { TokenService } from '../services/token.service';

import { logger } from "codelyzer/util/logger";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html'
})

export class BookmarksComponent implements OnInit {

  private bookmark: Array<Bookmark> =  new Array<Bookmark>();
  localBookmarks: any = [];
  serverBookmarks: any = [];
  foldersDifference: any = [];
  bookmarksDifference: any = [];
  key: string;
  localFolders: any = [];
  serverFolders: any = [];

  constructor(private bookmarksService: BookmarksService, private tokenService: TokenService) { }

  ngOnInit() {
    this.tokenService.getCookies("http://dev.wefaves.com/", "token", (key) => {
      this.tokenService.setToken(key);
      this.getUserBookmarksFolder();
    });
  }

  getUserBookmarksFolder() {
    chrome.bookmarks.getTree((bookmarks) => {
      if (this.getLocalFolders(bookmarks) == 1) {
        this.getServerFolders();
      }
      if (this.getLocalBookmarks(bookmarks) == 1) {
        this.getServerBookmarks();
      }
    });
  }

  private  getLocalFolders(folders) {
  let data = {};
  for (var i =0; i < folders.length; i++) {
        var folder = folders[i];
        if (folder.dateGroupModified) {
          data = {
                itemId: folder.id,
                title: folder.title,
                dateGroupModified: folder.dateGroupModified,
                parentId: folder.parentId,
                dateAdded: folder.dateAdded,
                indexPos:folder.index
              };
              this.localFolders.push(data);
        }

        if (folder.children) {
            this.getLocalFolders(folder.children);
          }
    }
    this.localFolders = this.localFolders.sort(this.compare);
    return 1;
}

  private getServerFolders() {
    this.bookmarksService.getUserFolders().then(
      (folders) => {
        this.setServerFolders(folders);
        this.foldersDifference = [];
        for (let i of this.localFolders) {
          let value = 0;
          for (let j of this.serverFolders) {
            if (i.title == j.title && i.parentId == j.parentId) {
              value = 1;
            }
          }
          if (value == 0) {
            this.foldersDifference.push(i);
            value = 0;
          }
        }
        this.foldersDifference = this.foldersDifference.sort(this.compare);
        this.synchFolders(this.foldersDifference, this.foldersDifference.length, 0);
      }
    ).catch(
      (err) => { }
    );
  }

  private setServerFolders(folders) {
    let data = {};
    for (var i =0; i < folders.length; i++) {
          var folder = folders[i];
          if (folder.date_group_modified) {
            data = {
                  itemId: folder.id,
                  title: folder.title,
                  dateGroupModified: folder.date_group_modified,
                  parentId: folder.parent_id,
                  dateAdded: folder.date_added,
                  indexPos:folder.index_pos
                };
                this.serverFolders.push(data);
          }

          if (folder.bookmark_folder_child) {
              this.setServerFolders(folder.bookmark_folder_child);
            }
      }
      this.serverFolders = this.serverFolders.sort(this.compare);
  }

   compare(a,b) {
    if (+a.itemId < +b.itemId)
      return -1;
    if (+a.itemId > +b.itemId)
      return 1;
    return 0;
  }

  private synchFolders(folders, length, i) {
    if (i < length) {
      this.bookmarksService.postBookmarkFolder(folders[i]).then(
        (value) => {
            i++;
            this.synchFolders(folders, length, i);
        });
    }
  }

  private getLocalBookmarks(bookmarks) {
    let data = {};
    for (var i =0; i < bookmarks.length; i++) {
          var bookmark = bookmarks[i];
          if (bookmark.url) {
            data = {
                  itemId: bookmark.id,
                  title: bookmark.title,
                  url: bookmark.url,
                  parentId: bookmark.parentId,
                  dateAdded: bookmark.dateAdded,
                  indexPos:bookmark.index
                };
                this.localBookmarks.push(data);
          }

          if (bookmark.children) {
              this.getLocalBookmarks(bookmark.children);
            }
      }
      this.localBookmarks = this.localBookmarks.sort(this.compare);
      return 1;
  }

  private getServerBookmarks() {
    this.bookmarksService.getUserBookmarks().then(
      (bookmarks) => {
        this.setServerBookmarks(bookmarks);
        this.bookmarksDifference = [];
        for (let i of this.localBookmarks) {
          let value = 0;
          for (let j of this.serverBookmarks) {
            if (i.title == j.title && i.parentId == j.parentId) {
              value = 1;
            }
          }
          if (value == 0) {
            this.bookmarksDifference.push(i);
            value = 0;
          }
        }
        this.bookmarksDifference = this.bookmarksDifference.sort(this.compare);
        this.synchBookmarks(this.bookmarksDifference, this.bookmarksDifference.length, 0);
      }
    ).catch(
      (err) => { }
    );
  }

  private setServerBookmarks(bookmarks) {
    let data = {};
    for (var i =0; i < bookmarks.length; i++) {
          var bookmark = bookmarks[i];
          if (bookmark.bookmarks.length > 0) {
            let tmp = bookmark.bookmarks;
            for (let i = 0; i < tmp.length; i++) {
              data = {
                    itemId: tmp[i]['id'],
                    title: tmp[i]['title'],
                    url: tmp[i]['url'],
                    parentId: tmp[i]['parent_id'],
                    dateAdded: tmp[i]['date_added'],
                    indexPos:tmp[i]['index_pos']
                  };
              this.serverBookmarks.push(data);
            }
          }

          if (bookmark.bookmarks) {
              this.setServerBookmarks(bookmark.bookmark_folder_child);
            }
      }
      this.serverBookmarks = this.serverBookmarks.sort(this.compare);
  }

  private synchBookmarks(bookmark, length, i) {
    if (i < length) {
      this.bookmarksService.postBookmark(bookmark[i]).then(
        (value) => {
            i++;
            this.synchBookmarks(bookmark, length, i);
        });
    }
  }

}

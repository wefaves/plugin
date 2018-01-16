import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../services/bookmarks.service';
import { Bookmark } from '../models/bookmark';
import { TokenService } from '../services/token.service';

import { logger } from "codelyzer/util/logger";
import { environment } from '../../environments/environment';

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
  bookmarkstosetinlocal: any = [];
  folderstosetinlocal: any = [];
  key: string;
  localFolders: any = [];
  serverFolders: any = [];
  bookmarks: any = [];

  constructor(private bookmarksService: BookmarksService, private tokenService: TokenService) { }

  ngOnInit() {
    this.tokenService.getCookies(environment.web_app_endpoint, "token", (key) => {
      this.tokenService.setToken(key);
      this.getUserBookmarksFolder();
    });
  }

  getUserBookmarksFolder() {
    chrome.bookmarks.getTree((bookmarks) => {
      this.bookmarks = bookmarks;
      if (this.getLocalFolders(bookmarks) == 1) {
        this.getServerFolders();
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
            if (+i.indexPos == +j.indexPos && +i.parentId == +j.parentId) {
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
    } else {
      if (this.getLocalBookmarks(this.bookmarks) == 1) {
        this.getServerBookmarks();
        // if (this.setLocalFolders() == 1) {
        //     this.setLocalBookmarks();
        // }
        this.setLocalFolders();
        //this.setLocalBookmarkstmp();
      }
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
            if (+i.indexPos == +j.indexPos && +i.parentId == +j.parentId) {
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

  private setLocalBookmarkstmp() {
    this.bookmarksService.getUserBookmarks().then(
      (bookmarks) => {
        //this.setServerBookmarks(bookmarks);
        this.bookmarkstosetinlocal = [];
        for (let i of this.serverBookmarks) {
          let value = 0;
          for (let j of this.localBookmarks) {
            if (+i.indexPos == +j.indexPos && +i.parentId == +j.parentId) {
              value = 1;
            }
          }
          if (value == 0) {
            this.bookmarkstosetinlocal.push(i);
            value = 0;
          }
        }
        this.bookmarkstosetinlocal = this.bookmarkstosetinlocal.sort(this.compare);
        let data = {};
        for (let i = 0; i < this.bookmarkstosetinlocal.length; i++) {
          let tmp = this.bookmarkstosetinlocal[i];
          data = {
                title: tmp.title,
                url: tmp.url,
                parentId: tmp.parentId,
                index:tmp.indexPos
              };
            chrome.bookmarks.create(data);
            //chrome.bookmarks.move(id, {index: tmp.indexPos, parentId: tmp.parentId++});
        }
      }
    ).catch(
      (err) => { }
    );
  }

  private setLocalBookmarks(newId) {
    this.bookmarksService.getUserBookmarks().then(
      (bookmarks) => {
        //this.setServerBookmarks(bookmarks);
        this.bookmarkstosetinlocal = [];
        for (let i of this.serverBookmarks) {
          let value = 0;
          for (let j of this.localBookmarks) {
            if (+i.indexPos == +j.indexPos && +i.parentId == +j.parentId) {
              value = 1;
            }
          }
          if (value == 0) {
            this.bookmarkstosetinlocal.push(i);
            value = 0;
          }
        }
        this.bookmarkstosetinlocal = this.bookmarkstosetinlocal.sort(this.compare);
        let data = {};
        for (let i = 0; i < this.bookmarkstosetinlocal.length; i++) {
          let tmp = this.bookmarkstosetinlocal[i];
          data = {
                title: tmp.title,
                url: tmp.url,
                parentId: "1",//(+tmp.parentId + 1),
                index:tmp.indexPos
              };
            chrome.bookmarks.create(data, function(newBookmark) {
              chrome.bookmarks.move(newBookmark.id, {index: tmp.indexPos, parentId: newId});
            });
            // let toUpdate = {};
            // toUpdate = {
            //       title: tmp.title,
            //       url: tmp.url,
            //       parent_id: newId,//(+tmp.parentId + 1),
            //       index_pos:tmp.indexPos
            //     };
            // this.bookmarksService.updateBookmark(toUpdate, tmp.itemId).then();
            //chrome.bookmarks.move(id, {index: tmp.indexPos, parentId: tmp.parentId++});
        }
      }
    ).catch(
      (err) => { }
    );
  }

  private setLocalFolders() {
    // this.bookmarksService.getUserFolders().then(
    //   (folders) => {
        //this.setServerFolders(folders);
        this.folderstosetinlocal = [];
        for (let i of this.serverFolders) {
          let value = 0;
          for (let j of this.localFolders) {
            if (i.title == j.title && +i.parentId == +j.parentId) {
              value = 1;
            }
          }
          if (value == 0) {
            this.folderstosetinlocal.push(i);
            value = 0;
          }
        }
        this.folderstosetinlocal = this.folderstosetinlocal.sort(this.compare);
        let data = {};
        if (this.folderstosetinlocal.length > 0) {
          for (let i = 0; i < this.folderstosetinlocal.length; i++) {
            let tmp = this.folderstosetinlocal[i];
            data = {
                  title: tmp.title,
                  parentId: tmp.parentId,
                  index:tmp.indexPos
                };
              chrome.bookmarks.create(data, (newFolder) => {
                  this.setLocalBookmarks(newFolder.id);
              });
          }
        } else {
          this.setLocalBookmarkstmp();
        }

        //this.setLocalBookmarks();
    //   }
    // ).catch(
    //   (err) => { }
    // );
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

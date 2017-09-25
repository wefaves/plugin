import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from "../../environments/environment";
import { Bookmark } from "../model/bookmark";

@Injectable()
export class BookmarksService {

  cookie: string;

  constructor(private http: Http) { }

  getBookmarks() {
    return this.http.get('https://dev.api.wefaves.com/web/users/self/bookmarks', this.getToken())
      .map((response: Response) => response.json())
  }

  addBookmarks(bookmarks) {
    return this.http.post('https://api.wefaves.com/users/self/favorite', bookmarks, this.getToken())
      .map((response: Response) => response.json())
  }

  addFolder(folders) {
    return this.http.post('https://dev.api.wefaves.com/users/self/bookmarks/folder', folders, this.getToken())
      .map((response: Response) => response.json())
  }

  private getToken() {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.cookie});
    return new RequestOptions({ headers: headers });
  }

  public  setCookie(key) {
    this.cookie = key;
  }

  public  getCookie() {
    return this.cookie;
  }

  public  synchroFolder() {
    chrome.bookmarks.getTree((bookmarks) => {
      this.getFolders(bookmarks);
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
                //this.getBookmarks();
                //console.log(this.addFolder(data));
                console.log(this.getBookmarks());
                //console.log(folders[i].children[x]['id'] + ' - ' + folders[i].children[x]['title'] + ' - ' + folders[i].children[x]['dateGroupModified'] + ' - ' + folders[i].children[x]['index'] + ' - ' + folders[i].children[x]['parentId'] + ' - ' + folders[i].children[x]['dateAdded']);
              }
        }
        this.getFolders(folders[i].children);
      }
  }
}

}

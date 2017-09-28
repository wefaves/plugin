import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {ApiService} from "./api.service";
import {Bookmark} from "../models/bookmark";

@Injectable()
export class BookmarksService {

  constructor(private apiService: ApiService) {}

  getUserFolders(): Promise<[Bookmark]> {
    return new Promise((resolve, reject) => {
      this.apiService.getRequest('/users/self/bookmarks')
        .subscribe(
          data => resolve(Bookmark.ParseFromObjectToArray(data)),
          error => reject(<any>error));
    });
  }

  getUserBookmarks(): Promise<[Bookmark]> {
    return new Promise((resolve, reject) => {
      this.apiService.getRequest('/users/self/bookmarks')
        .subscribe(
          data => resolve(Bookmark.ParseFromObjectToArray(data)),
          error => reject(<any>error));
    });
  }

  postBookmarkFolder(bookmark: {}): Promise<[Bookmark]> {
    return new Promise((resolve, reject) => {
      this.apiService.postRequest('/users/self/bookmarks/folder', bookmark)
        .subscribe(
          data => resolve(Bookmark.ParseFromObjectToArray(data)),
          error => reject(<any>error));
    });
  }

  postBookmark(bookmark: {}): Promise<[Bookmark]> {
    return new Promise((resolve, reject) => {
      this.apiService.postRequest('/users/self/bookmarks', bookmark)
        .subscribe(
          data => resolve(Bookmark.ParseFromObjectToArray(data)),
          error => reject(<any>error));
    });
  }
}

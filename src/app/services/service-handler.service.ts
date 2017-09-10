import { Injectable } from '@angular/core';
import { BookmarksService } from './bookmarks.service';
import { HistoryService } from './history.service';

@Injectable()
export class ServiceHandlerService {

  constructor(private bookmarksService: BookmarksService, public historyService: HistoryService) {

  }

  public executeServices(key) {
    this.bookmarksService.setCookie(key);
  }

}

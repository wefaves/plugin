import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HistoryComponent } from './history/history.component';
import { SearchComponent } from './search/search.component';
import { CookieComponent } from './cookie/cookie.component';


import { BookmarksService } from './services/bookmarks.service';
import { HistoryService }  from './services/history.service';
import { SearchService } from './services/search.service';
import { TokenService } from './services/token.service';
import { ApiService } from "./services/api.service";


@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    HistoryComponent,
    SearchComponent,
    CookieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BookmarksService,
    HistoryService,
    SearchService,
    TokenService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

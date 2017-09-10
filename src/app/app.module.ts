import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HistoryComponent } from './history/history.component';
import { SearchComponent } from './search/search.component';


import { BookmarksService } from './services/bookmarks.service';
import { HistoryService }  from './services/history.service';
import { GlobalTokenService } from './services/global-token.service';
import { ServiceHandlerService } from './services/service-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    HistoryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookmarksService, HistoryService, GlobalTokenService, ServiceHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

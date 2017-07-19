import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HistoryComponent } from './history/history.component';

import {BookmarksService} from './services/bookmarks.service';
import  {HistoryService}  from './services/history.service';

@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookmarksService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

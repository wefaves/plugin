import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HistoryService } from "../services/history.service";
import { SearchService } from "../services/search.service"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private http: Http, private historyService: HistoryService) { }

  ngOnInit() { }

  public query = '';
  public filteredList = [];
  public elementRef;
  public list = [];

  filter() {
    if (this.query !== "") {
      this.historyService.getUserHistory().then(
        history => {
          this.filteredList = history.filter(function (el) {
            return el.url.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
          }.bind(this));
        });
      } else {
        this.filteredList = [];
      }
    }

    select(item){
      this.query = item;
      this.filteredList = [];
    }

  }

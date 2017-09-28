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
          if (this.filteredList.length > 8) {
            this.filteredList = this.filteredList.slice(0, 8);
          }
          for (let data of this.filteredList) {
            if (data._title.length > 25) {
              data._title = data._title.slice(0, 25) + "...";
            }
          }
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

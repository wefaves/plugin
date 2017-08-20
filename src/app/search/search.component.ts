import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HistoryService } from "../services/history.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private http: Http, private historyService: HistoryService) { }

  ngOnInit() {
  }

  public query = '';
  public filteredList = [];
  public elementRef;
  public list = [];

  filter() {
    if (this.query !== "") {
      this.getCookies("http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/", "currentUser", (key) => {
        this.historyService.getHistory(key)
        .subscribe(
          history => {
            this.filteredList = history.filter(function (el) {
              return el.title.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
          });
        });
      } else {
        this.filteredList = [];
      }
    }

    select(item){
      this.query = item;
      this.filteredList = [];
    }

    public  displaySearch(value) {
      console.log(value);
      let query = '';
      let filteredList = [];
      let elementRef = value;

      let result;
      this.http.get('./search.json')
      .map(res => res.json())
      .subscribe(
        val => result = val,
        err => console.error(err),
        () =>  {
          for (let i of result) {
            if (i.title === value) {
              this.list.push(i);
            }
          }
        });
      }

      private getCookies(domain, name, callback) {
        chrome.cookies.get({"url": domain, "name": name}, function (cookie) {
          if (callback) {
            callback(cookie ? cookie.value : null);
          }
          if (!cookie) {
            window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/');
          }
        });
      }

    }

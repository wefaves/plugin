import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html'
})
export class CookieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadCookies();
  }

  loadCookies() {
      chrome.cookies.getAll({}, function (callback) {
        console.log(callback);
        let j = 0;
        // display https cookies
        for (let i = 0; i < callback.length; i++) {
          if (callback[i].httpOnly == true) {
            j++;
          }
        }
        console.log(j);
      });
    }

}

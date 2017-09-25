import { Injectable } from '@angular/core';
import  { ServiceHandlerService } from './service-handler.service';

@Injectable()
export class GlobalTokenService {

  //var bookmarksService;
  token: '';

  constructor(private serviceHandler: ServiceHandlerService) {
    this.getCookies("http://wefaves.com/", "token", this.callHandler, this.token);
  }

    private getCookies(domain, name, callback, token) {
      // chrome.cookies.get({"url": domain, "name": name}, (cookie) => {
      //     if (callback) {
      //       callback( (cookie ? cookie.value : null), token);
      //     }
      //     /*if (!cookie) {
      //       window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/account/login');
      //     }*/
      // });

      chrome.cookies.get({"url": "http://wefaves.com/", "name": "token"}, this.callHandler);
    }

    callHandler(key) {
      //service.executeServices(key);
      console.log(key.value);
      this.token = key.value;
    }

    public  getToken() {
      console.log('getter');
      console.log(this.token);
      return this.token;
    }

}

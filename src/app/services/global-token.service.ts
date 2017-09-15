import { Injectable } from '@angular/core';
import  { ServiceHandlerService } from './service-handler.service';

@Injectable()
export class GlobalTokenService {

  //var bookmarksService;

  constructor(private serviceHandler: ServiceHandlerService) {
    this.getCookies("http://wefaves.com/", "currentUser", this.callHandler, serviceHandler);
  }

    private getCookies(domain, name, callback, service) {
      chrome.cookies.get({"url": domain, "name": name}, (cookie) => {
          if (callback) {
            callback( (cookie ? cookie.value : null), service);
          }
          /*if (!cookie) {
            window.open('http://dev.my.wefaves.com.s3-website.eu-central-1.amazonaws.com/#/account/login');
          }*/
      });
    }

    private callHandler(key, service) {
      service.executeServices(key);
    }

}

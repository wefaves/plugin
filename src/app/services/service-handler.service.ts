import { Injectable } from '@angular/core';

@Injectable()
export class ServiceHandlerService {

  constructor() {

  }

  public  setCookie(key) {
    console.log('works' + key);
  }

}

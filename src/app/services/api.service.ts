import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import { TokenService } from './token.service';


@Injectable()
export class ApiService {

  /* ---------------------------------------------------------------------------------------------------------------- */

  private BASE_URL: string = environment.api_url;

  /* ---------------------------------------------------------------------------------------------------------------- */

  /**
   * Get the Json Web Token from the local storage.
   *
   * @returns {RequestOptions}
   */
  private static formatHeader(): RequestOptions {
    const headers: Headers = new Headers();
    if (localStorage.getItem('user') != null) {
      const token = JSON.parse(localStorage.getItem('user')).token;
      headers.append('Authorization', 'Bearer ' + token);
    }
    return new RequestOptions({headers});
  }

  /**
   * Get the body of an HTTP response.
   *
   * @param res
   * @returns {any|{}}
   */
  private static handleBody(res: Response) {
    return res.json() || {};
  }

  /**
   * Format the error message of an HTTP response.
   *
   * @param error
   * @returns {any}
   */
  private static handleError(error: Response) {
    const body = error.json();
    return Observable.throw(body.error);
  }

  /* ---------------------------------------------------------------------------------------------------------------- */

  constructor(private http: Http, private tokenService: TokenService) {}

  /* ---------------------------------------------------------------------------------------------------------------- */

  /**
   * Perform a PUT request.
   *
   * @param url
   * @param auth
   * @param body
   * @returns {Observable<>}
   */
  putRequest(url: string, body: Object, auth: boolean = true): Observable<Object> {
    let header: RequestOptions = null;

    if (auth) {
      header = ApiService.formatHeader();
    }
    return this.http.put(this.BASE_URL + url, body, header)
      .map(ApiService.handleBody)
      .catch(ApiService.handleError);
  }

  /**
   * Perform a POST request.
   *
   * @param url
   * @param auth
   * @param body
   * @returns {Observable<>}
   */
  postRequest(url: string, body: Object, auth: boolean = true): Observable<Object> {
    let header: RequestOptions = null;

    if (auth) {
      header = this.tokenService.getToken();
    }
    return this.http.post(this.BASE_URL + url, body, header)
      .map(ApiService.handleBody)
      .catch(ApiService.handleError);
  }

  /**
   * Perform a GET request.
   *
   * @param url
   * @param auth
   * @returns {Promise<>}
   */
  getRequest(url: string, auth: boolean = true): Observable<Object> {
    let header: RequestOptions = null;

    if (auth) {
      header = this.tokenService.getToken();
    }
    return this.http.get(this.BASE_URL + url, header)
      .map(ApiService.handleBody)
      .catch(ApiService.handleError);
  }

  /**
   * Perform a DELETE request.
   *
   * @param url
   * @param auth
   * @returns {Observable<>}
   */
  deleteRequest(url: string, auth: boolean = true): Observable<Object> {
    let header: RequestOptions = null;

    if (auth) {
      header = ApiService.formatHeader();
    }
    return this.http.delete(this.BASE_URL + url, header)
      .map(ApiService.handleBody)
      .catch(ApiService.handleError);
  }

  /**
   * Perform a Patch request.
   *
   * @param url
   * @param body
   * @param auth
   * @returns {Observable<>}
   */
  patchRequest(url: string, body: Object, auth: boolean = true): Observable<Object> {
    let header: RequestOptions = null;

    if (auth) {
      header = ApiService.formatHeader();
    }
    return this.http.patch(this.BASE_URL + url, body, header)
      .map(ApiService.handleBody)
      .catch(ApiService.handleError);
  }
}

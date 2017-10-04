import {Injectable} from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private _http: Http) {
  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:8080/users/register', user, {headers: headers})
      .map(res => res.json());
  };

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:8080/users/authenticate', user, {headers: headers})
      .map(res => res.json());
  };

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this._http.get('http://localhost:8080/users/profile', {headers: headers})
      .map(res => res.json());
  };

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  };

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user)); // local storage can only store strings;
    this.user = user;
    this.authToken = token;
  };

  // loggedIn() {
  //   return tokenNotExpired();
  // };

  logout() {
    this.user = null;
    this.authToken = null;
    localStorage.clear();
  }

  uploadImage(formGroup) {
    const URL = 'http://localhost:8080/users/upload';
    return this._http.post(URL, formGroup).map((response: Response) => response.json());
  }

}

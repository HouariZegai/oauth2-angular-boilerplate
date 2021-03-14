import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {environment} from '../../environments/environment';
import {ToastrService} from 'ngx-toastr';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  isUserLogin: boolean = false

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  public login(user: User) {
    return this.getToken(user)
  }

  public getToken(user: User) {
    let basicAuthHeaderString = 'Basic ' + window.btoa('USER_CLIENT_APP:password');

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });

    let formData = new FormData();
    formData.append('grant_type', 'password');
    formData.append('username', user.username);
    formData.append('password', user.password);

    return this.http.post(environment.BASE_AUTH_URL, formData, {headers}).pipe(map(data => {
      sessionStorage.setItem("access_token", data['access_token'])
      sessionStorage.setItem("refresh_token", data['refresh_token'])
      this.isUserLogin = true
    }));
  }

  isUserLoggedIn() {
    return this.isUserLogin;
  }
}

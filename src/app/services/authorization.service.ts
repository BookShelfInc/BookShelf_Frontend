import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthorizationService {

  public token: string;

  constructor(private http:Http) { }

  login(username: string, password: string): Observable<boolean>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = 'http://fit.kbtu.kz:8080/auth/login/';
    let body = JSON.stringify({username: username, password: password});
    
    return this.http.post(url, body, options)
      .map((response: Response) => {
        console.log(response);
        console.log(response.status)
        let token = response.json() && response.json().token
        if(token){
          this.token = token
          localStorage.setItem('user', JSON.stringify({ token: token, username: username }));
          return true;
        }
        else{
          return false;
        }
      });
  }

  register(username: string, password: string): Observable<boolean>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = 'http://fit.kbtu.kz:8080/auth/register/';
    let body = JSON.stringify({username: username, password: password});

    return this.http.post(url, body, options)
      .map((response: Response) => {
        if(response.status == 200){
          return true;
        }
        else{
          return false;
        }
      });
  }

  isLoggedIn(): Boolean {
      let currentUser = JSON.parse(localStorage.getItem('user'));
      if (currentUser && currentUser.token) {
          return true
      } else {
          return false
      }
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('user');
    location.reload();
  }

}

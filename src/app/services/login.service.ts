import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "../models/login.model";
import { User } from "../models/user.model";
import { API_URL } from "../utils/api.url";

@Injectable()
export class LoginService {


  constructor(private http: HttpClient) { }

  async getLogin(email: string, password: string): Promise<Login> {
    const url = `${API_URL.URL_LOGIN}`;
    const response = await this.http.post(url, { password, email }).toPromise();
    return response as Login;
  }

  authUser(user: any): Observable<User> {
    localStorage.setItem("id", user.user._id);
    localStorage.setItem("token", user.token);
    const us = new Observable<User>(
      subscriber => {
        subscriber.next(new User(user.user._id, user.token));
      }
    );
    return us;
  }

  getUser(): any {
    const id = localStorage.getItem("id")?.toString();
    const token = localStorage.getItem("token")?.toString();

    if (id && token) {
      return new User(id, token);
    }
    return null;
  }
}
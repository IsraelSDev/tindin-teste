import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "../models/login.model";
import { User } from "../models/user.model";
import { API_URL } from "../utils/api.url";

@Injectable()
export class LoginService {

  public isLoged: boolean = false;

  constructor(private http: HttpClient) { }

  async getLogin(email: string, password: string): Promise<Login> {
    const url = `${API_URL.URL_LOGIN}`;
    alert("Autenticando usuário...");
    const response = await this.http.post(url, { password, email }).toPromise()
      .catch(err => {
        return err.error.message;
      });
    return response as Login;
  }

  authUser(user: any): Observable<User> {
    localStorage.setItem("id", user.user._id);
    localStorage.setItem("token", user.token);

    const us = new Observable<User>(
      subscriber => {
        subscriber.next(new User(user.user._id, user.token));
        this.isLoged = true;
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

  logout(): void {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    this.isLoged ?? false;
    window.location.reload();
  }
}
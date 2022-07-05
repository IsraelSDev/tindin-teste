import { API_URL } from "../utils/api.url"
import { environment } from './../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Game } from "../models/game.model";

@Injectable()
export class GamesService {
  constructor(private http: HttpClient) { }


  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${API_URL.URL_GAMES}`, {
      headers: { email: environment.PARAMS.email, password: environment.PARAMS.password, 'Access-Control-Allow-Origin': '*' }
    });
  }

}
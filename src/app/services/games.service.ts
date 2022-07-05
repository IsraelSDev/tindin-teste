import { API_URL } from "../utils/api.url"
import { environment } from './../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Games } from "../models/game.model";

@Injectable()
export class GamesService {
  constructor(private http: HttpClient) { }


  getGames(): Observable<Games[]> {
    return this.http.get<Games[]>(`${API_URL.URL_GAMES}`);
  }
}
import { API_URL } from "../utils/api.url"
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Games, GameApi } from "../models/game.model";

@Injectable()
export class GamesService {

  constructor(private http: HttpClient) { }

  async getGames(): Promise<Games> {
    const url = `${API_URL.URL_GAMES}`;
    const response = await this.http.get(url).toPromise();
    return response as Games;
  }

  async getGamesHighLight(): Promise<Games> {
    const url = `${API_URL.URL_GAMES_HIGHLIGHT}`;
    const response = await this.http.get(url).toPromise();
    return response as Games;
  }

  async getGameById(id: string): Promise<GameApi> {
    const url = `${API_URL.URL_GAME_ID + id}`;
    const response = await this.http.get(url).toPromise();
    return response as GameApi;
  }

}
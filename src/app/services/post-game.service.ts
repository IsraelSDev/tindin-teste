import { NewGame } from './../models/new-game.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL } from "../utils/api.url";


@Injectable()
export class PostGameService {
  constructor(private htpp: HttpClient) {

  }

  postGame(game: NewGame) {
    return new Observable
      (subscriber => {
        this.htpp.post(`${API_URL.URL_POST_GAME}`, JSON.stringify(game), {
          headers: {
            'Content-Type': 'application/json', 'x-api-key': `${localStorage.getItem('token')}`
          }
        }).subscribe(
          (data: any) => {
            subscriber.next(data);
          }
        );
      }
      );
  }
}

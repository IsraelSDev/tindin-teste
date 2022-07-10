import { NewGame } from './../models/new-game.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators'
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
          }, (err: any) => {
            if (err.status === 422) {
              alert("Está faltando informações para o cadastro do jogo!");
            }
            subscriber.error(err);
          }
        );
      }
      );
  }
}


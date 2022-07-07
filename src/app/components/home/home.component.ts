import { Observable, Subject } from 'rxjs';
import { Component, OnInit, OnChanges } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Games, Game } from 'src/app/models/game.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [GamesService, LoginService]
})
export class HomeComponent implements OnInit, OnChanges {


  public listOfGames: Games[] = [];
  public listGames: Game[] = [];
  public isLoged: boolean = false;

  constructor(private gamesService: GamesService,
    private loginService: LoginService) {
  }

  ngOnInit(): void {

    if (this.loginService.getUser()) {
      this.isLoged = true;
      console.log(this.isLoged);
    } else {
      console.log(this.isLoged);
    }

    this.gamesService.getGames().then(games => {
      this.listOfGames.push(games);
      this.listGames = this.listOfGames[0].games;
    }).catch(err => {
      console.log(err);
    });
  }


  ngOnChanges(): void {

  }
}

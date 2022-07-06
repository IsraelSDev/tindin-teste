import { Observable, Subject } from 'rxjs';
import { Component, OnInit, OnChanges } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Games, Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [GamesService]
})
export class HomeComponent implements OnInit, OnChanges {


  public listOfGames: Games[] = [];
  public listGames: Game[] = [];

  constructor(private gamesService: GamesService) {


  }

  ngOnInit(): void {
    this.gamesService.getGames().then(games => {
      console.log(this.listOfGames);
      this.listOfGames.push(games);
      this.listGames = this.listOfGames[0].games;
      console.log(this.listGames);
    }).catch(err => {
      console.log(err);
    });
  }

  ngOnChanges(): void {

  }
}

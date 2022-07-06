import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Games, Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
  providers: [GamesService]
})
export class CarouselComponent implements OnInit {

  constructor(
    private gamesService: GamesService
  ) { }


  public listOfGames: Games[] = [];
  public listGames: Game[] = [];

  ngOnInit(): void {
    this.gamesService.getGamesHighLight().then(games => {
      console.log(this.listGames[0]);
      this.listOfGames.push(games);
      this.listGames = this.listOfGames[0].games;
      console.log(this.listGames);
    }).catch(err => {
      console.log(err);
    });
  }

}

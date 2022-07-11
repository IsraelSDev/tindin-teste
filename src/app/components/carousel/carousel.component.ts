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

  public responsiveOptions: any = [];

  constructor(
    private gamesService: GamesService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }


  public listOfGames: Games[] = [];
  public listGames: Game[] = [];



  ngOnInit(): void {
    this.gamesService.getGamesHighLight().then(games => {
      this.listOfGames.push(games);
      this.listGames = this.listOfGames[0].games;
    }).catch(err => {
      console.log(err);
    });
  }

}

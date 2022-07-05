import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Games } from 'src/app/models/game.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [GamesService]
})
export class HomeComponent implements OnInit {


  public gamesList: {} = {
    games: [],
    totalSize: 0
  };
  public games: [] = [];

  constructor(private gamesService: GamesService) {

  }

  ngOnInit(): void {
    this.gamesService.getGames().subscribe(games => {
      this.gamesList = games;

    }
    );

  }

}

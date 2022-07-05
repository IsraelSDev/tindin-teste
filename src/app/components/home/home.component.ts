import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [GamesService]
})
export class HomeComponent implements OnInit {

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getGames().subscribe(games => {
      console.log(games);
    }
    );
  }

}

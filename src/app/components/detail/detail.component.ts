import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games.service';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
  providers: [GamesService]
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private gameService: GamesService) { }

  public currentRoute: string = this.route.snapshot.url[1].path;
  public gameDetailList: Game[] = []
  public gameDetail: Game = new Game();


  ngOnInit(): void {

    this.gameService.getGameById(this.currentRoute).then(game => {
      this.gameDetailList.push(game);
      this.gameDetail = this.gameDetailList[0];
      console.log(this.gameDetail);
    }
    ).catch(err => {
      console.log(err);
    });
  }

}

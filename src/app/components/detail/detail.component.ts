import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games.service';
import { GameApi } from 'src/app/models/game.model';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
  providers: [GamesService]
})
export class DetailComponent implements OnInit {

  responsiveOptions: any;

  constructor(private route: ActivatedRoute,
    private gameService: GamesService) {

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

  public currentRoute: string = this.route.snapshot.url[1].path;
  public gameDetail: GameApi = new GameApi();
  public imagesAndVideos: any[] = [];


  ngOnInit(): void {
    this.gameService.getGameById(this.currentRoute).then(game => {
      this.gameDetail = game;
      this.imagesAndVideos = [...this.gameDetail.game.photos, ...this.gameDetail.game.videos];
    }
    ).catch(err => {
      console.log(err);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../../services/games.service';
import { GameApi } from 'src/app/models/game.model';
import { Rate } from 'src/app/models/rate.model';
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
  public display: boolean = false;
  public messageDisplay: string = 'Qual nota este jogo merece? (0-10)';
  public nota: number = 0;
  public rate: any;
  public ratingSubject = new Subject<any>();


  ngOnInit(): void {

    this.route.params.subscribe(
      (params: any) => {
        this.gameService.getGameById(params.id).then(game => {
          this.gameDetail = game;
          this.imagesAndVideos = [...this.gameDetail.game.photos, ...this.gameDetail.game.videos];
        }).catch(err => {
          console.log(err);
        });
      });

  }

  votar(): void {
    this.display = false;
    this.messageDisplay = 'Votando com "' + this.nota + '". Aguarde um momento...';
    this.display = true;
    this.rate = new Rate(this.currentRoute, this.nota);
    this.gameService.voteGame(this.rate).subscribe(res => {

      this.display = true;
      this.messageDisplay = 'Voto enviado com Sucesso!!';
      this.gameDetail.game.totalVotes++;
      this.gameDetail.game.rating = res.ratingUpdated;
      console.log(res);
      setTimeout(() => {
        this.display = false;
      }, 1000)
    }
    ), (err: any) => {
      this.display = true;
      this.messageDisplay = 'Ocorreu um erro ao votar, tente novamente mais tarde!';
      console.log(err);
    }
    this.nota = 0;
  }
}

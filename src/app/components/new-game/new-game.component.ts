import { LoginService } from 'src/app/services/login.service';
import { NewGame } from './../../models/new-game.model';
import { PostGameService } from './../../services/post-game.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GamesService } from './../../services/games.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.sass'],
  providers: [PostGameService, GamesService, LoginService]
})
export class NewGameComponent implements OnInit {

  public plataforms: any;
  public genres: any;
  public responsiveOptions: any;
  @ViewChild('newGameForm') public form: any;

  public arrayOfPhotos: [] = [];
  public gameTitle: string = '';
  public gameDescription: string = '';
  public mediumPrice: any = null;
  public gameReleaseYear: any = null;
  public gameImages: any = [];
  public gameGenres: [] = [];
  public gamePlatforms: [] = [];
  public gameTags: [] = [];
  public display: boolean = false;
  public messageDisplay: string = '';


  constructor(
    private postGameService: PostGameService,
    private loginService: LoginService

  ) {
    this.plataforms = [
      'PS',
      'PS2',
      'PS3',
      'PS4',
      'PS5',
      'PSP',
      'XBOX',
      'XBOX 360',
      'XBOX ONE',
      'XBOX SERIES S',
      'XBOX SERIES X',
      'SWITCH',
      'SUPER NINTENDO',
      'NINTENDO',
      'NINTENDO 64',
      'NINTENDO 3DS',
      'NINTENDO DS',
      'NINTENDO SWITCH',
      'NINTENDO WII',
      'MEGA DRIVE',
      'PC',
      'MOBILE',
    ]
    this.genres = [
      'Fight',
      'Sports',
      'Survival',
      'Horror',
      'RPG',
      'Fps',
      'Tps',
      'Platform',
      'Adventure',
      'Action',
      'Minigame',
      'Racing',
      'Strategy',
      'Musical',
      'Dance',
      'Simulation'
    ]
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

  ngOnInit(): void {

  }

  getForm(): void {
    this.display = true;
    this.messageDisplay = 'Enviando dados...';
    let game = new NewGame(
      this.gameTitle,
      this.gameDescription,
      this.mediumPrice,
      this.gameReleaseYear,
      this.gameGenres,
      this.gamePlatforms,
      this.gameTags,
      this.gameImages
    );
    this.postGameService.postGame(game).subscribe(res => {
      this.display = true;
      this.messageDisplay = 'Jogo enviado com Sucesso!!';
      this.clearForm();
    }
      , err => {
        this.display = true;
        this.messageDisplay = 'Ocorreu um erro ao enviar o jogo, tente novamente mais tarde!';
        console.log(err);
      }
    );
  }
  clearForm(): void {
    this.form.reset();
  }
}

import { Observable, Subject, of } from 'rxjs';
import { Component, OnInit, OnChanges } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, switchMap, } from 'rxjs/operators';
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
  public listOfGamesFiltered: Games[] = [];
  public listGamesFiltered: Game[] = [];
  public isLoged: boolean = false;
  public games: any;
  public searchSubject: Subject<string> = new Subject<string>();

  constructor(private gamesService: GamesService,
    private loginService: LoginService) {
  }

  ngOnInit(): void {

    if (this.loginService.getUser()) {
      this.isLoged = true;
    } 

    this.gamesService.getGames().then(games => {
      this.listOfGames.push(games);
      this.listGames = this.listOfGames[0].games;
    }).catch(err => {
      console.log(err);
    });

    this.games = this.searchSubject.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((value: string) => {
        if (value.trim() === '') {
          return of<Games[]>([]);
        }
        return this.gamesService.getGameByName(value)
      }),
      catchError((err: any) => {
        console.log("Ocorreu um erro: " + err);
        return of<Games[]>([]);
      }));

    this.games.subscribe(
      (games: any) => {
        this.listOfGamesFiltered = [];
        this.listOfGamesFiltered.push(games);
        this.listGamesFiltered = this.listOfGamesFiltered[0].games;
      }
    )
  }

  search(value: string): void {
    this.searchSubject.next(value);
  }
  clear(): void {
    this.searchSubject.next(' ');
  }

  ngOnChanges(): void {

  }
}

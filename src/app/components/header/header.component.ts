import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap, } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Games, Game } from 'src/app/models/game.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  providers: [LoginService, GamesService]
})
export class HeaderComponent implements OnInit {

  public isLoged: boolean = false;
  public router: string = 'login';
  public games: any;
  public searchSubject: Subject<string> = new Subject<string>();
  public listOfGames: Games[] = [];
  public listGames: Game[] = [];



  constructor(private loginService: LoginService,
    private gamesService: GamesService
  ) { }

  ngOnInit(): void {
    if (this.loginService.getUser()) {
      this.isLoged = true
      this.router = ''
    } else {
      this.isLoged = false;
    }

    this.games = this.searchSubject.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((value: string) => {
        if (value.trim() === '') {
          return of<Games[]>([]);
        }
        console.log("chamando... " + value);
        return this.gamesService.getGameByName(value)
      }),
      catchError((err: any) => {
        console.log("Ocorreu um erro: " + err);
        return of<Games[]>([]);
      }));

    this.games.subscribe(
      (games: any) => {
        this.listOfGames = [];
        this.listOfGames.push(games);
        this.listGames = this.listOfGames[0].games;
      }
    )

  }

  logout(): void {
    alert("Você deslogou com sucesso!")
    this.loginService.logout();
    this.router = 'login';
  }

  search(value: string): void {
    this.searchSubject.next(value);
  }
  clear(): void {
    this.searchSubject.next(' ');
  }

}

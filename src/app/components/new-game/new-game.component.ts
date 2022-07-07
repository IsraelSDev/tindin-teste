import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.sass']
})
export class NewGameComponent implements OnInit {

  public plataforms: any;
  public genres: any;


  constructor(
  ) {
    this.plataforms = [
      { name: 'PS', code: 1, },
      { name: 'PS2', code: 2 },
      { name: 'PS3', code: 3 },
      { name: 'PS4', code: 4 },
      { name: 'PS5', code: 5 },
      { name: 'PSP', code: 6 },
      { name: 'XBOX', code: 7 },
      { name: 'XBOX 360', code: 8 },
      { name: 'XBOX ONE', code: 9 },
      { name: 'XBOX SERIES S', code: 10 },
      { name: 'XBOX SERIES X', code: 11 },
      { name: 'SWITCH', code: 12 },
      { name: 'SUPER NINTENDO', code: 13 },
      { name: 'NINTENDO', code: 14 },
      { name: 'NINTENDO 64', code: 15 },
      { name: 'NINTENDO 3DS', code: 16 },
      { name: 'NINTENDO DS', code: 17 },
      { name: 'NINTENDO SWITCH', code: 18 },
      { name: 'NINTENDO WII', code: 19 },
      { name: 'MEGA DRIVE', code: 20 },
      { name: 'PC', code: 21 },
      { name: 'MOBILE', code: 22 },
    ]

    this.genres = [
      { name: 'Fight', code: 1 },
      { name: 'Sports', code: 2 },
      { name: 'Survival', code: 3 },
      { name: 'Horror', code: 4 },
      { name: 'RPG', code: 5 },
      { name: 'Fps', code: 6 },
      { name: 'Tps', code: 7 },
      { name: 'Platform', code: 8 },
      { name: 'Adventure', code: 9 },
      { name: 'Action', code: 10 },
      { name: 'Minigame', code: 11 },
      { name: 'Racing', code: 12 },
      { name: 'Strategy', code: 14 },
      { name: 'Musical', code: 15 },
      { name: 'Dance', code: 16 },
      { name: 'Simulation', code: 17 },
    ]

  }

  ngOnInit(): void {
  }

}

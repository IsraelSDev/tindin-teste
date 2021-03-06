export class Game {
  id: number = 0;
  title: string = "";
  description: string = "";
  resume: string = "";
  photos = [] = [{
    name: "",
    url: "",
    _id: ""
  }];
  videos = [] = [{
    name: "",
    url: "",
    _id: ""
  }];
  _id: number = 0;
  genres: string[] = [""];
  platforms: string[] = [""];
  tags: string[] = [""];
  rating: number = 0;
  highlight: boolean = false;
  totalVotes: number = 0;
  mediumPrice: number = 0;
  releaseYear: number = 0;
  createdAt: string = "";
  updatedAt: string = "";
  __v: number = 0;
  total: number = 0;
}

export class Games {
  games: Game[] = [];
  totalSize: number = 0;
}

export class GameApi {
  game: Game = new Game() as Game;
}
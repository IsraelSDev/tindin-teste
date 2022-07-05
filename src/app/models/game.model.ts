export class Game {
  id: number = 0;
  title: string = "";
  description: string = "";
  resume: string = "";
  photos: [{}] = [{
    name: "",
    url: "",
    _id: ""
  }];
  videos: [{}] = [{
    type: "",
    url: "",
    _id: ""
  }];
  genres: string[] = [""];
  platforms: string[] = [""];
  tags: string[] = [""];
  rating: number = 0;
  highlight: boolean = false;
  totalVotes: number = 0;
  mediumPrice: number = 0;
  releaseYear: number = 0;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  __v: number = 0;
}
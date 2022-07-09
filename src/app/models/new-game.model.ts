export class NewGame {
  constructor(
    public title: string,
    public description: string,
    public mediumPrice: number,
    public releaseYear: number,
    public genres: any[],
    public platforms: any[],
    public tags: any[],
    public photos: []
  ) {
  }
}
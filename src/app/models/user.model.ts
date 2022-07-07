export class User {


  constructor(public id: string, public token: string) {
  }

  public getToken(): string {
    return this.token;
  }
  public getId(): string {
    return this.id;
  }
}
export class User {
  public showRepos:boolean;

  constructor(
    public photoUrl:string,
    public userProfile:string,
    public bio:string,
    public numRepos:number,
    public followers:number,
    public following:number,
    public created:string
  ) {
    this.showRepos = false;
  }

}

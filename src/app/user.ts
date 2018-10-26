export class User {

  constructor(
    public photoUrl:string,
    public userProfile:string,
    public bio:string,
    public numRepos:number,
    public followers:number,
    public following:number,
  ) {}
  
}

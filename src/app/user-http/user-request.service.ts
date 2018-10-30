import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';

import { environment } from '../../environments/environment';
import { User } from '../user';
import { Repo } from '../repo-class/repo';


@Injectable(
  // providedIn: 'root'
)
export class UserRequestService {

  user: User;
  repo: Repo;
  arrayRepo:Repo[];
  constructor(private http:HttpClient) {
    this.user = new User("", "", "", 0, 0, 0, "");
    this.repo = new Repo("", "", "");
  }


  private userInput = "";


  userRequest(userInput) {

    this.http.get("https://api.github.com/users/" + userInput + "?access_token=cb327c777eff937591311a292e4721e661dd2c7f").subscribe((response)=>{
    const userData=response;

    this.user.photoUrl = userData["avatar_url"];
    this.user.userProfile = userData["login"];
    this.user.bio = userData["bio"];
    this.user.numRepos = userData["public_repos"];
    this.user.followers = userData["followers"];
    this.user.following = userData["following"];
    this.user.created = userData["created_at"];

    return this.user;
  })


  } //end userRequest



  repoRequest(userInput) {

    this.http.get("https://api.github.com/users/" + userInput + "/repos?access_token=cb327c777eff937591311a292e4721e661dd2c7f").subscribe((response) =>{
      const reposData= response;

      this.arrayRepo = [];

      for (let index=0; index<reposData["length"]; index++) {
        this.repo = new Repo ("", "", "");
        this.repo.appName = reposData[index]["name"];
        this.repo.repoLink = reposData[index]["html_url"];
        this.repo.description = reposData[index]["description"];
        this.arrayRepo.push(this.repo);
      }
      return this.arrayRepo;
    })


  } //end repoRequest

}

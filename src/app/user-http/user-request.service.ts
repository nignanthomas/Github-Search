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
    this.user = new User("", "", "", 0, 0, 0);
    this.repo = new Repo("", "", "");
  }

  private userInput = "";
  // private githubData:any = "";
  // private githubData:any = "";


  userRequest(userInput) {

    this.http.get("https://api.github.com/users/" + userInput + "?access_token=" + environment.accessToken).subscribe((response)=>{
    const userData=response;

    this.user.photoUrl = userData["avatar_url"];
    this.user.userProfile = userData["login"];
    this.user.bio = userData["bio"];
    this.user.numRepos = userData["public_repos"];
    this.user.followers = userData["followers"];
    this.user.following = userData["following"];
    console.log(userData);
  })


  } //end userRequest



  repoRequest(userInput) {

    this.http.get("https://api.github.com/users/" + userInput + "/repos?access_token=" + environment.accessToken).subscribe((response)=>{
      const reposData=response;

      // reposData.forEach(function(repoData){
      //   this.repo.appName = repoData["name"];
      //   this.repo.repoLink = repoData["html_url"];
      //   this.repo.description = repoData["description"];
      //   this.arrayRepo.push(this.repo);
      //
      //   console.log(repoData);
      // });
      this.arrayRepo = [];
      for (let index=0; index<reposData["length"]; index++) {

        this.repo.appName = reposData[index]["name"];
        this.repo.repoLink = reposData[index]["html_url"];
        this.repo.description = reposData[index]["description"];
        this.arrayRepo.push(this.repo);
        this.repo = new Repo ("", "", "");

      }
      console.log(this.arrayRepo);
      // console.log(reposData)
    })


  } //end repoRequest

}

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
  arrayRepo:[];
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

      reposData.forEach(repoData){

        this.repo.appName = repoData["name"];
        this.repo.repoLink = repoData["html_url"];
        this.repo.description = repoData["description"];

        this.arrayRepo.push(this.repo);

        console.log(repoData);
      }
      console.log(arrayRepo)

    })


  } //end repoRequest

}






// interface ApiResponse {
//
// }
// let userData =new Promise((resolve,reject)=>{
//       this.http.get('https://api.github.com/users/'+ 'nignanthomas' + '?access_token'+  environment.accessToken).toPromise().then(response=>{
//           // this.user.photoUrl = response.avatar_url;
//           // this.user.userProfile = response.login;
//           // this.user.bio = response.bio;
//           // this.user.numRepos = response.public_repos;
//           // this.user.followers = response.followers;
//           // this.user.following = response.following;
//           console.log(response);
//           resolve()
//       },
//       error=>{
//               this.user.userProfile = "Profile Not Found";
//               reject(error);
//           }
//       )
//   })
//
//   return userData;
//

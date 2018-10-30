import { Component, OnInit} from '@angular/core';

import { UserRequestService } from '../user-http/user-request.service';
import { User } from '../user';
import { Repo } from '../repo-class/repo';


@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  providers: [UserRequestService],
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  user:User;
  arrayRepo:Repo[];
  // username:any;

  constructor(private userService: UserRequestService) { }

  getResponse(username) {
    this.userService.userRequest(username);
    this.user = this.userService.user;
    this.user.showRepos = false;

    console.log("Got User Response");
    console.log(this.user);

    this.userService.repoRequest(username);
    this.arrayRepo = this.userService.arrayRepo;

    // console.log("Got Repos Response");
    // console.log(this.arrayRepo);
  }

  getRepos() {
    // this.userService.repoRequest(username);
    this.arrayRepo = this.userService.arrayRepo;

    console.log("Got Repos Response");
    console.log(this.arrayRepo);

  }





  toggleRepos(){
    this.user.showRepos = !this.user.showRepos;
    console.log("Toggle Repos");
  }

  ngOnInit() {

  }

}

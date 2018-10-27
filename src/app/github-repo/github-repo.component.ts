import { Component, OnInit } from '@angular/core';

import { UserRequestService } from '../user-http/user-request.service';
// import { Repo } from '../repo-class/repo';

@Component({
  selector: 'app-github-repo',
  templateUrl: './github-repo.component.html',
  providers: [UserRequestService],
  styleUrls: ['./github-repo.component.css']
})
export class GithubRepoComponent implements OnInit {

  // arrayRepo:Repo[];

  constructor(private userService: UserRequestService) { }

  // getRepos(username) {
  //   this.userService.repoRequest(username);
  //   this.arrayRepo = this.userService.arrayRepo;
  // }

  ngOnInit() {
  }

}

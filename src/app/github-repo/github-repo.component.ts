import { Component, OnInit, Input } from '@angular/core';

import { UserRequestService } from '../user-http/user-request.service';
import { Repo } from '../repo-class/repo';

@Component({
  selector: 'app-github-repo',
  templateUrl: './github-repo.component.html',
  providers: [UserRequestService],
  styleUrls: ['./github-repo.component.css']
})
export class GithubRepoComponent implements OnInit {

  // arrayRepo:Repo[];
  @Input() repo:Repo;

  constructor(private userService: UserRequestService) { }


  ngOnInit() {
  }

}

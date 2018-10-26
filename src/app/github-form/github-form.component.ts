import { Component, OnInit } from '@angular/core';

import { UserRequestService } from '../user-http/user-request.service';
import { User } from '../user';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  providers: [UserRequestService],
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {

  user:User;

  username = "";

  constructor(private userService: UserRequestService) {}



  submitUser() {
    this.userService.userRequest(this.username);
    this.user = this.userService.user;
  }

  ngOnInit() {
  }

}

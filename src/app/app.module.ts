import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubRepoComponent } from './github-repo/github-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubFormComponent,
    GithubProfileComponent,
    GithubRepoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

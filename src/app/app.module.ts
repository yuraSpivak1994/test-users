import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {AppRoutingModule} from './app-routing.module';
import {PostInfoComponent} from './post-info/post-info.component';
import {HeaderComponent} from './header/header.component';
import {MainServiceService} from './main/main-service.service';
import {HttpClientModule} from '@angular/common/http';
import {UserInfoService} from './user-info/user-info.service';
import {PostsComponent} from './posts/posts.component';
import {PostsService} from './posts/posts.service';
import {PostInfoService} from './post-info/post-info.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserInfoComponent,
    PostInfoComponent,
    HeaderComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [MainServiceService, UserInfoService, PostsService, PostInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

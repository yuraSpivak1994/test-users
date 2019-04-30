import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {PostInfoComponent} from './post-info/post-info.component';
import {HeaderComponent} from './header/header.component';
import {PostsComponent} from './posts/posts.component';

const appRoutes: Routes = [
    {path: 'header', component: HeaderComponent, data: {animation: 'Home'}},
    {path: 'main', component: MainComponent, data: {animation: 'Home'}},
    {path: 'user-info/:id', component: UserInfoComponent, data: {animation: 'Main'}},
    {path: 'post-info/:id', component: PostInfoComponent, data: {animation: 'Home'}},
    {path: 'user-posts', component: PostsComponent, data: {animation: 'All'}}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

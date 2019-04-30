import {Component, OnInit} from '@angular/core';
import {PostsService} from './posts.service';

@Component({
    selector: 'app-user-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    public posts = [];

    constructor(private postsService: PostsService) {
    }

    ngOnInit() {
        this.getPosts();
    }


    private assignComments(comments: Array<any>): void {
        this.posts.forEach((post) => {
            post.comments = comments.filter((comment) => comment.postId === post.id);
        });
    }

    private getComments(): void {
        this.postsService.getComments()
            .subscribe((comments: Array<any>) => {
                this.assignComments(comments);
            });
    }

    private getPosts(): void {
        this.postsService.getPosts()
            .subscribe((data: any) => {
                this.posts = data;
                this.getComments();
            }, err => {
                console.log(err);
            });
    }
}

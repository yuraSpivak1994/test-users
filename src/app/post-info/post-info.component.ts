import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostInfoService} from './post-info.service';
import {posts} from '../constants/constant';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.scss']
})
export class PostInfoComponent implements OnInit, OnDestroy {
  id: number;
  public subscription: any;
  public posts = posts;

  constructor(private route: ActivatedRoute, private postInfoService: PostInfoService) {
  }

  private postId(id): void {
    this.postInfoService.getPostId(id)
        .subscribe((data: any) => {
          this.posts = data;
        }, err => {
          console.log(err);
        });
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const id = +params.id;
      this.postId(id);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

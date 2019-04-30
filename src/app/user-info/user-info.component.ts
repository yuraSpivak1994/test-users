import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserInfoService} from './user-info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit, OnDestroy {
  id: number;
  private subscription: any;
  public userInfo;

  constructor(private route: ActivatedRoute, private userServiceId: UserInfoService) {
  }

  private getUser(id): void {
    this.userServiceId.getUsersId(id)
        .subscribe((data: any) => {
          this.userInfo = data;
        }, err => {
          console.log(err);
        });
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const id = +params.id;
      this.getUser(id);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

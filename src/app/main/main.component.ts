import { Component, OnInit } from '@angular/core';
import { MainServiceService } from './main-service.service';
import { Users } from '../constants/constant';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public users = Users;
  constructor(private mainService: MainServiceService) { }

  private getUsers(): void {
    this.mainService.getUsers()
        .subscribe((data: any) => {
          this.users = data;
        }, err => {
          console.log(err);
        });
  }

  ngOnInit() {
    this.getUsers();
  }
}

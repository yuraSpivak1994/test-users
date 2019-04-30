import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Posts} from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class PostInfoService {
  private apiUrl = Posts.apiUrl();
  constructor(private http: HttpClient) { }
  getPostId(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}

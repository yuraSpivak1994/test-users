import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Posts} from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = Posts.apiUrl();

  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get(`${this.apiUrl}`);
  }

  getComments() {
    return this.http.get(`${this.apiUrl}/1/comments`);
  }
}

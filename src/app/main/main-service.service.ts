import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config} from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  private apiUrl = Config.apiUrl();
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}`);
  }
}

import {Injectable} from '@angular/core';
import {Config} from '../constants/constant';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserInfoService {

    private apiUrl = Config.apiUrl();

    constructor(private http: HttpClient) {
    }

    getUsersId(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
}

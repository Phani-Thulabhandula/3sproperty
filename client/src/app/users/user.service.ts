import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: any = {};
    token: String = '';
    public socket;


    header: HttpHeaders = new HttpHeaders()
    constructor(private http: HttpClient) {

        this.token = localStorage.getItem("_A_tro_ee");
        this.header = this.header.set('Authorization', 'Bearer ' + this.token)
    }

    updateProfile(data) {
        return this.http.post('users/update-profile', data, { headers: this.header })
    }

    getProfile() {
        return this.http.get('users/getprofile', { headers: this.header })
    }

    uploadPicture(data) {
        return this.http.post('/posts/upload', data, { headers: this.header })
    }

    removeImage(file) {
        return this.http.delete('/posts/delete-image?filename=' + file, { headers: this.header })
    };
}
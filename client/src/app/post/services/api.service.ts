import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// import {io} from 'socket.io-client';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    token: String = '';
    public socket;


    header: HttpHeaders = new HttpHeaders()
    constructor(private http: HttpClient) {
        // this.socket = io('',{
        //     // WARNING: in that case, there is no fallback to long-polling
        //     transports: [ 'websocket' ] // or [ 'websocket', 'polling' ], which is the same thing
        //   });

        this.token = localStorage.getItem("_A_tro_ee");
        this.header = this.header.set('Authorization', 'Bearer ' + this.token)
    }

    uploadImage(formData) {
        return this.http.post('/posts/upload', formData, { headers: this.header })
    }

    getDropDowns() {
        return this.http.get('/posts/get-dropdowns', { headers: this.header })
    }

    addProperty(data) {
        return this.http.post('/posts/create', data, { headers: this.header })
    }

    updateProperty(data) {
        return this.http.post('/posts/update', data, { headers: this.header })
    }

    getPropertyById(id) {
        return this.http.get('posts/get-post-by-id/' + id, { headers: this.header })
    }

    getActivePosts(data) {
        return this.http.post('posts/get-all-posts', data, { headers: this.header })
    }

    getMyPosts(data) {
        return this.http.post('posts/get-my-posts', data, { headers: this.header })
    }

    removeImage(file) {
        return this.http.delete('/posts/delete-image?filename=' + file, { headers: this.header })
    };

    sendPostMessage(message) {
        return this.http.post('/post-messages/send-my-message', message, { headers: this.header });
    }

    getPostMessages(post_id) {
        return this.http.get('/post-messages/get-post-messages/' + post_id, { headers: this.header });
    }
}
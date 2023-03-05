import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
    providedIn: 'root',
})
export class PostApi {
    constructor(private readonly http: HttpClient) {}

    public getList(): Observable<Post[]> {
        return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_page=1');
    }
}

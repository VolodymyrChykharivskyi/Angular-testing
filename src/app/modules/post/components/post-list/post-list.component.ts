import { Component, OnInit } from '@angular/core';
import { PostApi } from '../../api/post.api';
import { Post } from '../../interfaces/post.interface';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {
    public posts: Post[] = [];

    constructor(private readonly postApi: PostApi) {}

    public ngOnInit() {
        this.loadPosts();
    }

    private loadPosts(): void {
        this.postApi.getList().subscribe((posts) => (this.posts = posts));
    }
}

import { TestBed } from '@angular/core/testing';
import { PostApi } from '../../api/post.api';

import { PostListComponent } from './post-list.component';
import { of } from 'rxjs';

const postMock = { userId: 1, id: 2, title: 'Title', body: 'This is description' };

describe('PostListComponent without fixture', () => {
    let component: PostListComponent;

    beforeEach(async () => {
        const postApiSpy = jasmine.createSpyObj<PostApi>(['getList']);
        postApiSpy.getList.and.returnValue(of([postMock]));

        await TestBed.configureTestingModule({
            providers: [PostListComponent, { provide: PostApi, useValue: postApiSpy }],
        });

        component = TestBed.inject(PostListComponent);
        component.ngOnInit();
    });

    it('should load posts', () => {
        expect(component.posts).toEqual([postMock]);
    });
});

import { PostApi } from '../../api/post.api';

import { PostListComponent } from './post-list.component';
import { of } from 'rxjs';

const postMock = { userId: 1, id: 2, title: 'Title', body: 'This is description' };

describe('PostListComponent without configureTestingModule', () => {
    let component: PostListComponent;

    beforeEach(() => {
        const postApiSpy = jasmine.createSpyObj<PostApi>(['getList']);
        postApiSpy.getList.and.returnValue(of([postMock]));

        component = new PostListComponent(postApiSpy);
        component.ngOnInit();
    });

    it('should load posts', () => {
        expect(component.posts).toEqual([postMock]);
    });
});

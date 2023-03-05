import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostApi } from '../../api/post.api';

import { PostListComponent } from './post-list.component';
import { of } from 'rxjs';

const postMock = { userId: 1, id: 2, title: 'Title', body: 'This is description' };

describe('PostListComponent with fixture', () => {
    let component: PostListComponent;
    let fixture: ComponentFixture<PostListComponent>;

    beforeEach(async () => {
        const postApiSpy = jasmine.createSpyObj<PostApi>(['getList']);
        postApiSpy.getList.and.returnValue(of([postMock]));

        await TestBed.configureTestingModule({
            declarations: [PostListComponent],
            providers: [{ provide: PostApi, useValue: postApiSpy }],
        }).compileComponents();

        fixture = TestBed.createComponent(PostListComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should load posts', () => {
        expect(component.posts).toEqual([postMock]);
    });
});

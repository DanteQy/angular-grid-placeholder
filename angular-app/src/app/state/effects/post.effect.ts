import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { getPosts, getPostsSuccess } from '../actions/post.action';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.interface';

@Injectable()
export class PostsEffects {
    constructor(
        private readonly actions$: Actions, 
        private readonly postService: PostService) {
    }

    getPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getPosts.type),
            switchMap(() => this.postService.getPosts()),
            map((posts: Post[]) => getPostsSuccess({posts}))
        )
    );
}
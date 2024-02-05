import { createAction, props } from '@ngrx/store';
import { Post } from '../../models/post.interface';

const prefix = '[Posts]';

export const getPosts = createAction(`${prefix} Get Posts`);
export const setData = createAction(`${prefix} Set Post ID`, props<{ selectedPostId: number }>());
export const getPostsSuccess = createAction(
    `${getPosts.type} Success`,
    props<{
        posts: Post[];
    }>()
);

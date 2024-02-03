import { Action, createReducer, on } from '@ngrx/store';

import { PostState } from '../post.state';
import { getPosts, getPostsSuccess } from '../actions/post.action';


export const initialPostsState: PostState = {
    posts: [],
    isLoading: false
};

const reducer = createReducer<PostState>(
    initialPostsState,
    on(getPosts, (state) => {
        return {
            ...state,
            isLoading: true
        };
    }),
    on(getPostsSuccess, (state, { posts }) => {
        return {
            ...state,
            isLoading: false,
            posts
        };
    })
);

export function postsReducer(state = initialPostsState, actions: Action): PostState {
    return reducer(state, actions);
}
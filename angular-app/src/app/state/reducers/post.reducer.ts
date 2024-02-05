import { Action, createReducer, on } from '@ngrx/store';
import { PostState } from '../post.state';
import { getPosts, getPostsSuccess, setData } from '../actions/post.action';


export const initialPostsState: PostState = {
    posts: [],
    selectedPostId: -1
};

const reducer = createReducer<PostState>(
    initialPostsState,
    on(getPosts, (state) => {
        return {
            ...state
        };
    }),
    on(getPostsSuccess, (state, { posts }) => {
        return {
            ...state,
            posts
        };
    }),
    on(setData, (state, { selectedPostId }) => ({
         ...state, 
         selectedPostId 
        }))
);

export function postsReducer(state = initialPostsState, actions: Action): PostState {
    return reducer(state, actions);
}
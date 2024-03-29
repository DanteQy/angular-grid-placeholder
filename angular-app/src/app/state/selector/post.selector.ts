import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from '../post.state';

export const selectPostState = createFeatureSelector<PostState>('posts');
export const selectPostsList = createSelector(selectPostState, (state) => state.posts);
export const selectSelectedPostId = createSelector(selectPostState, (state) => state.selectedPostId);
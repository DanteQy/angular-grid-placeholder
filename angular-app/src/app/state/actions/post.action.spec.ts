import { postsListMock } from '../../mocks/posts.mocks';
import { getPosts, getPostsSuccess } from './post.action';

describe('PostsActions', () => {
    describe('getPosts', () => {
        it('should create an action to get posts', () => {
            const expectedAction = {
                type: getPosts.type
            };
            const action = getPosts();
            expect(action).toEqual(expectedAction);
        });
    });

    describe('getPostsSuccess', () => {
        it('should create an action to get posts success', () => {
            const expectedAction = {
                type: getPostsSuccess.type,
                posts: postsListMock
            };
            const action = getPostsSuccess({
                posts: postsListMock
            });
            expect(action).toEqual(expectedAction);
        });
    });
 
});
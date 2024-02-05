import { Post } from "../models/post.interface";
import { PostState } from "../state/post.state";
export const postsListMock: Post[] = [
    {
        userId: 1,
        id: 1,
        title: 'Book 1',
        body: 'aaaa'
    },
    {
        userId: 1,
        id: 2,
        title: 'Book 2',
        body: 'bbbb'
    },
    {
        userId: 22,
        id: 3,
        title: 'Book 4',
        body: 'ccc'
    },
    {
        userId: 4,
        id: 4,
        title: 'Book 1',
        body: 'ddd'
    },
];

export const postsStateMock: PostState = {
    posts: postsListMock,
    selectedPostId: 2
};
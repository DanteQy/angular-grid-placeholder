import { Post } from '../models/post.interface';

export interface PostState {
    posts: Post[];
    selectedPostId: number;
}

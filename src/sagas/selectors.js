import { get } from 'lodash';

export const getUser = (state) => get(state, 'app.user', null);
export const getPosts = (state) => get(state, 'posts', []);
export const getPost = (state, postId) => state.posts.find(post => post.id === postId);
export const getComments = (state) => get(state, 'comments', []);
export const getComment = (state, commentId) => state.comments.find(comment => comment.id === commentId);

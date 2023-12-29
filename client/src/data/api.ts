import { IComment, ILike, IPost, IUser } from "../interfaces";

import { Comments, Likes, Posts, Users } from "./index";

export async function getUser(id: string): Promise<IUser> {

    return new Promise((res, rej) => {
        const user = Users.find(x => x.id == id);
        if(user) {
            res(user);
        } else {
            rej("user not found");
        }
    })
}

export async function getPosts(): Promise<IPost[]> {
    return Posts;
}

export async function getPostById(id: string): Promise<IPost> {
    return new Promise((res, rej) => {
        const post = Posts.find(p => p.id == id);
        if(post) {
            res(post);
        } else {
            rej("Post not found");
        }
    });
}

export async function getLikesForPost(id: string): Promise<ILike[]> {
    return new Promise((res, rej) => {
        const currentPost = Posts.find(p => p.id == id);

        if(currentPost) {
            res(Likes.filter(l => l.post == id));
        } else {
            rej("this post not exist");
        }
    });
}

export async function getCommentsForPost(id: string): Promise<IComment[]> {
    return new Promise((res, rej) => {
        const currentPost = Posts.find(p => p.id == id);

        if(currentPost) {
            res(Comments.filter(l => l.post == id));
        } else {
            rej("this post not exist");
        }
    });
}

export async function getPostsIDs(): Promise<string[]> {
    return Posts.map(p => p.id);
}
import { IPost, IUser } from "../interfaces";

import { Posts, Users } from "./index";

export function getUser(id: string | undefined): IUser | undefined {
    if(id == undefined) {
        throw new Error('must to have id')
    }
    return Users.find(x => x.id == id);
}

export function getPosts(): IPost[] {
    return Posts;
}
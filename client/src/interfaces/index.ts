export interface IUser {
    id: string,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    coverPic?: string,
    profilePic?: string,
    connections: IUser[],
    posts: IPost[]
}

export interface IPost {
    id: string,
    owner: IUser,
    textContent?: string,
    img?: string,
    likes: ILike[],
    comments: IComment[];
}

export interface ILike {
    id: string,
    owner: IUser
}

export interface IComment {
    id: string,
    owner: IUser,
    textContent: string,
    likes: ILike[]
}
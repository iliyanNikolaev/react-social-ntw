export interface IUser {
    id: string,
    password: string,
    firstName: string,
    lastName: string,
    coverPic?: string,
    profilePic?: string,
    connections: IUserLean[],
    posts: IPost[]
}

export interface IUserLean {
    id: string,
    firstName: string,
    lastName: string,
    profilePic: string
}

export interface IPost {
    id: string,
    owner: IUserLean,
    textContent?: string,
    img?: string,
    likes: IUserLean[],
    comments: IComment[];
}

export interface IComment {
    id: string,
    owner: IUserLean,
    textContent: string,
}
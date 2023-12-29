export interface IUser {
    id: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string,
    coverPic?: string,
    profilePic?: string,
    connections: IUserLean[], // ref user populate id, firstName, lastName, profilePic
    posts: string[]
}

export interface LoginDto{
    email: string,
    password: string,
}

export interface RegisterDto {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
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
    textContent: string,
    img?: string,
    likes: string[], // ref likes
    comments: string[]; // ref comments
}

export interface ILike {
    id: string,
    post: string, //ref posts
    owner: IUserLean // ref user populate id, firstName, lastName, profilePic
}

export interface IComment {
    id: string,
    post: string, // ref post
    owner: IUserLean, // ref user populate id, firstName, lastName, profilePic
    textContent: string,
}

export interface IUserDataLogged {
    isAuth: boolean,
    id: string,
    firstName: string,
    lastName: string,
    coverPic: string,
    profilePic: string
}

export interface IUserDataNotLogged {
    isAuth: boolean
}
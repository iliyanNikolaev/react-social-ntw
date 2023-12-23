**entities**

```typescript
interface User {
    id: string,
    password: string,
    firstName: string,
    lastName: string,
    coverPic?: string,
    profilePic?: string,
    connections: IUserLean[], //ref -> User populate id, firstName, lastName, profilePic
    posts: IPost[] // ref -> Posts populate all
}
```
```typescript
interface Post {
    id: string,
    owner: IUserLean,
    textContent?: string,
    img?: string,
    likes: IUserLean[], //ref -> User populate id, firstName, lastName, profilePic
    comments: IComment[];
}
```
```typescript
interface IComment {
    id: string,
    owner: IUserLean, //ref -> User populate id, firstName, lastName, profilePic
    textContent: string,
}
```

**pages**
```typescript
* Home
onInit() {
    1 fetch posts, save in state 
    2 render
}
savedInState() {
    posts
}

```

```typescript
* Profile

onInit() {
    1 fetch user populate connections and posts, save in state
    2 render
}
savedInState() {
    current user info ( firstName, lastName, profilePic, coverPic, connections)
    posts
}
```
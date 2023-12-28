**entities**

```typescript
interface User {
    id: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    coverPic?: string,
    profilePic?: string,
    connections: string[], //ref -> User populate id, firstName, lastName, profilePic
    posts: string[] // ref -> Posts populate all
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
    1 needs only posts IDs ( pagination )
    2 render
}
savedInState() {
    postsIDs
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

**components**
1 fetch post by id
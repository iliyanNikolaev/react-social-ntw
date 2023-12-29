import { PostItem } from "../PostItem"

export const PostList = ({ postsIDs }: {postsIDs: string[]}) => {
    return (
        <div>
            {!postsIDs && <p>Error</p>}

            {postsIDs && postsIDs.length == 0 && <p>No posts</p>}

            {postsIDs && postsIDs.map(x => <PostItem key={x} postId={x} />)}
        </div>
    )
}

import { IPost } from "../../interfaces"
import { PostItem } from "../PostItem"

export const PostList = ({posts}: {posts: IPost[] | undefined}) => {
    return (
        <div>
            {!posts && <p>Error</p>}
            {posts && posts.length == 0 && <p>No posts</p>}

            {posts && posts.map(x => <PostItem key={x.id} post={x}/>)}
        </div>
    )
}

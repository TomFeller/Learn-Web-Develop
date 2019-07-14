import React from 'react';
import UserComments from "./UserComments";

class UserPosts extends React.Component {
    render() {
        const {posts} = this.props;
        return (
            <div className={'user-data-posts'}>
                <div className={'container'}>
                    <h6>Posts</h6>
                    {posts.map((post, p) => {
                        return (
                            <div className={'user-data-post'} key={p}>
                                <div className={'user-data-post-header flex align-center'}>
                                    <div className={'user-data-list-thumbnail'}
                                         style={{backgroundImage: `url(${post.thumbnail})`}}/>
                                    <div className={'user-data-list-details'}>
                                        <h5>{post.name}</h5>
                                        <p>{post.date_created}</p>
                                    </div>
                                </div>

                                <div className={'user-data-post-image'}>
                                    <img src={post.image} width={'100%'}/>
                                </div>

                                <div className={'user-data-post-likes-and-shares'}>
                                    <div>
                                        <p>{post.likes.length} people like this post</p>

                                    </div>
                                    <div className={'flex'}>
                                        <p>{post.comments.length} Comments</p>
                                        <p>{post.shares.length} Shares</p>
                                    </div>
                                </div>

                                {post.comments.length > 0 ?
                                    <UserComments comments={post.comments}/> :
                                    <div>No comments yet</div>}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default UserPosts;
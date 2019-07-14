import React from 'react';

class UserComments extends React.Component {
    render() {
        const {comments} = this.props;
        return (
            <div id={'post-comments'}>
                <h6>Comments</h6>
                {comments.map((comment, c) => {
                    return (
                        <div className={'comment'} key={c}>
                            <div className={'comment-thumbnail'}
                                 style={{backgroundImage: `url(${comment.thumbnail})`}}
                            />
                            <div>
                                <div className={'comment-details'}>
                                    <h5>{comment.name}</h5>
                                    <div>
                                        <p>{comment.content}</p>
                                    </div>
                                </div>
                                <div className={'comment-actions'}>
                                    <a href={'/'}>Like</a>
                                    <a href={'/'}>Replay</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default UserComments;
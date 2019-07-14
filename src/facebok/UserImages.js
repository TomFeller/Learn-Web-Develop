import React from 'react';
import UserComments from "./UserComments";

class UserImages extends React.Component {
    render() {
        const {images} = this.props;
        return (
            <div className={'user-images'}>
                <div className={'container'}>
                    <h6>Images</h6>
                    <div className={'user-data-images'}>
                        {images.map((image, p) => {
                            return (
                                <div className={'user-data-image-wrapper'} key={p}>
                                    <div className={'user-data-image'} style={{backgroundImage: `url(${image.url})`}}>
                                        <div className={'user-data-image-likes'}>
                                            <img
                                                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Facebook_like_thumb.png/1200px-Facebook_like_thumb.png'}
                                                className={'like-icon'}/>
                                            {image.likes}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserImages;
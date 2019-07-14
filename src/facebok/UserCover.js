import React from 'react';
import UserComments from "./UserComments";

class UserCover extends React.Component {
    render() {
        const {userData} = this.props;
        return (
            <div id={'facebook-cover'} style={{backgroundImage: `url(${userData.cover})`}}>
                <div className={'container'}>
                    <div className={'user-cover-details'}>
                        <div className={'user-cover-profile-image'}
                             style={{backgroundImage: `url(${userData.thumbnail})`}}/>
                        <p>{userData.name} {userData.last_name}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCover;
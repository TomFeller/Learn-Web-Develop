import React from 'react';

import './facebook-style.css';
import FacebookLogoutMode from "./FacebookLogoutMode";
import FacebookLoginMode from "./FacebookLoginMode";
import UserPosts from "./UserPosts";
import logout from './images/logout.PNG'
import UserImages from "./UserImages";
import UserCover from "./UserCover";

class FacebookApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null,
            loginMode: false
        }
    }

    switchToLogin = (userData) => {
        this.setState({
            loginMode: true,
            userData: userData
        })
    };

    render() {
        const {loginMode, userData} = this.state;
        return (
            <div id={'facebook-app'}>
                <div id={'facebook-header'}>
                    <div className={'container'}>
                        {loginMode ?
                            <FacebookLoginMode userData={userData}/>
                            :
                            <FacebookLogoutMode switchToLogin={this.switchToLogin}/>
                        }
                    </div>
                </div>

                <div id={"facebook-content"}>
                    {loginMode ?
                        <div>
                            <UserCover userData={userData}/>
                            <UserImages images={userData.images}/>
                            <UserPosts posts={userData.posts}/>
                        </div>
                        :
                        <div>
                            <img src={logout} width={'100%'}/>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default FacebookApp;

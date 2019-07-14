import React from 'react';
import facebook_thumbnail from './images/facebook_thumbnail.png';
import messages from './images/messages.png';
import friends from './images/friends.png';
import UserMessage from "./UserMessage";
import UserNotification from "./UserNotification";
import Post from "./UserPosts";

class FacebookLoginMode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataActive: null
        }
    }

    showDetailsData = (dataName) => {

        this.setState({
            dataActive: dataName
        })
    };

    render() {
        const {userData} = this.props;
        const {dataActive} = this.state;
        return (
            <div className={'facebook-login-mode flex align-center'}>
                <div className={'logo-wrapper'}>
                    <div className={'logo'}>
                        <img src={facebook_thumbnail}/>

                    </div>
                    <div className={'search_field'}>
                        <input type={'text'} value={userData.name} readOnly/>
                    </div>
                </div>
                <div className={'flex align-center user-details-data'}>
                    <div className={'flex '}>
                        <div className={'user_thumbnail'}>
                            <img src={userData.thumbnail}/>
                        </div>
                        <div className={'user_name'}>
                            <h5 className={'pointer'}>{userData.name}</h5>
                        </div>
                    </div>
                    <h5 className={'pointer'}>Home</h5>
                    <h5 className={'pointer'}>Create</h5>

                    <div className={'flex'}>
                        <div className={'action-icon'}
                             onClick={() => this.showDetailsData('messages')}>
                            <img src={messages} width={'30px'}/>
                        </div>
                        <div className={'action-icon'}
                             onClick={() => this.showDetailsData('notifications')}>
                            <img src={friends} width={'30px'}/>
                        </div>
                    </div>
                    {dataActive &&
                    <div className={'user-data-list'}>
                        {userData[dataActive].map((data, i) => {
                            let DataComponent;
                            switch (dataActive) {
                                case 'messages':
                                    DataComponent = UserMessage;
                                    break;
                                case 'notifications':
                                    DataComponent = UserNotification;
                                    break;
                            }
                            return (
                                <div key={i}>
                                    <DataComponent data={data}/>
                                </div>
                            )
                        })}
                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default FacebookLoginMode;
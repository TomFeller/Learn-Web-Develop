import React from 'react';

class UserNotification extends React.Component {
    render() {
        const {data} = this.props;
        return(
            <div className={'user-data-list-item'}>
                <div className={'user-data-list-thumbnail'}
                     style={{backgroundImage: `url(${data.thumbnail})`}}/>
                <div className={'user-data-list-details'}>
                    <h5>{data.name}</h5>
                    <p>{data.days}d</p>
                </div>
            </div>
        )
    }
}

export default UserNotification;
import React from 'react';
import {facebookUsers} from "./facebook-users";

class FacebookLogoutMode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            // users: facebookUsers,
            user_email: '',
            user_password: ''
        };

    };
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
            showErrorMessage: false
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {user_email} = this.state;

        this.setState({
            isLoading: true
        });

        fetch(`https://api.youdoadventures.com/imga/facebook-users-json.js`, {
            method: 'GET',
        }).then(
            response => response.json()
        ).then(
            success => {
                const userData = success.find(user => user.email === user_email);
                if (userData) {
                    this.setState({
                        userData: userData,
                        isLoading: false
                    });
                    this.props.switchToLogin(userData)
                } else {
                    this.setState({
                        showErrorMessage: true
                    })
                }
            }
        ).catch(
            error => console.log(error)
        );

        // console.log(JSON.stringify(facebookUsers));
        //

    };

    render() {
        const {user_email, user_password, showErrorMessage} = this.state;

        return (
            <div className={'facebook-logout-mode'}>
                <div className={'logo'}>
                    Facebook
                </div>
                <div>
                    <form className={'facebook-form'}>
                        <div className={'form-field'}>
                            <label>Email or Phone</label>
                            <input type={'text'}
                                   name={'user_email'}
                                   value={user_email}
                                   onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type={'text'}
                                   name={'user_password'}
                                   value={user_password}
                                   onChange={this.handleChange}/>

                        </div>
                        <button className={'submit-button'}
                                onClick={this.handleSubmit}>
                            {this.state.isLoading ?
                                <img src="https://thumbs.gfycat.com/ImprobablePertinentGraysquirrel-size_restricted.gif" className={'loader'}/> :
                                'Log In'}
                        </button>
                    </form>
                    <p className={'error-message'}
                       style={{visibility: showErrorMessage ? 'visible' : 'hidden'}}>Please check your
                        data</p>
                </div>
            </div>
        )
    }
}

export default FacebookLogoutMode;
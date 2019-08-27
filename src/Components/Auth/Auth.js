import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer';
import axios from 'axios';
import './auth.css';

class Auth extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }

        this.registerNewUser = this.registerNewUser.bind(this);
        this.login = this.login.bind(this);
    }

    registerNewUser() {
        const { username, password } = this.state;
        let newUser = {
            username,
            password
        }
        axios.post(`/api/users`, newUser).then(response => {
            this.props.getUser(response.data)
            window.location = `/#/dashboard`;
        })
    }
    // const redirectUri = encodeURIComponent(`${window.location.origin}/auth`)

    // window.location = `https://${process.env.REACT_APP_AUTH_DOMAIN}/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&scope=openid%20email%20profile&redirect_uri=${redirectUri}&response_type=code`;

    login() {
        const { username, password } = this.state;
        let oldUser = {
            username,
            password
        }
        axios.get(`/api/users/${username}`, oldUser).then(response => {
            this.props.getUser(response.data)
            window.location = `/#/dashboard`;
        })
    }

    render() {
        const { username, password } = this.state;
        console.log(this.state);
        return (
            <div className='auth-container'>
                {/* <img /> */}
                <h1>Helo</h1>
                <div className='auth-input'>
                    Username:  <input value={username}
                        onChange={(e) => this.setState({ username: e.target.value })} />
                    Password:  <input value={password}
                        onChange={(e) => this.setState({ password: e.target.value })} />
                </div>
                <div className='auth-buttons'>
                    <button onClick={this.login}>
                        Login
                    </button>
                    <button onClick={this.registerNewUser}>
                        Register
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(null, { getUser })(Auth);
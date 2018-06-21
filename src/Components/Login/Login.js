import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import Logo from '../../assets/auth_logo.png';

class Home extends Component {
    constructor() {
        super()

        this.state = {
            username: "",
            password: "",
            btnDisable: true
        }//HANDLEING OF STATES FOR ALL INPUTS AND BUTTONS
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLoginRequest = this.handleLoginRequest.bind(this);
        this.handleRegisterRequest = this.handleRegisterRequest.bind(this);
    }//VAL = INPUT
    handleUsernameChange(val) {
        this.setState({ username: val })
    }
    handlePasswordChange(val) {
        this.setState({ password: val })
    }//COMPARES STATES TO DB VIA LOGIN CTRL
    handleLoginRequest() {
        axios.post('/api/auth/login', {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            this.props.history.push('/Dashboard');
        }).catch(res => {
            alert('Profile not found.')
        })
    }//COMPARES AND IF AVAILABLE CREATES NEW USER VIA THE CTRL
    handleRegisterRequest() {
        axios.post('/api/auth/register', {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            this.props.history.push('/Dashboard');
        }).catch(res => {
            alert('Credidentials are currently unavailable.')
        })
    }
    render() {
        return (
            <div className='App'>
                <div className='login-content'>
                    <div className='login-logo'>
                        <img src={Logo} alt='Houser-Logo' />
                    </div>
                    <div className='login-inputs'>
                        <div className="login-input-title">Username</div>
                        <input onChange={(e) => this.handleUsernameChange(e.target.value)} className="login-username" type="text" placeholder = "You're Username" />
                        <div className="login-input-title">Password</div>
                        <input onChange={(e) => this.handlePasswordChange(e.target.value)} className="login-password" type="password" placeholder = "You're Password"/>
                    </div>
                    <div className="login-btns">
                        <button onClick={this.handleLoginRequest} className="login-btn-login"> Login</button>
                        <button onClick={this.handleRegisterRequest} className="login-btn-reg"> Register</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
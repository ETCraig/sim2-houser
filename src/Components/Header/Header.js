import React, {Component} from 'react';
import axios from 'axios';
import './Header.css';
import {withRouter} from 'react-router-dom';
import {delPropertyInfo} from '../../Redux/reducer';
import {connect} from 'react-redux';
import Logo from '../../assets/header_logo.png';

class Header extends Component {
    constructor() {
        super()

        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout() {
        axios.post('api/auth/logout').then(res => {
            this.props.delPropertyInfo();
            this.props.history.push('/');
            alert('Logout Completed');
        });
    }
    render() {
        return(
            <div className = 'App'>
                <div className = 'header-wpr'>
                    <div className = 'Logo'>
                        <img src = {Logo} alt = '' />
                    </div>
                    <div className = 'houser-text'>
                        <h1>Houser</h1>
                    </div>
                    <div className = 'dashboard-text'>
                        <h1>Dashboard</h1>
                    </div>
                    <div className = 'logout-text'>
                        <button onClick = {this.handleLogout} className = 'hdr-logout-btn'>Logout</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, {delPropertyInfo})(Header));
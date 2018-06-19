import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/auth_logo.png';

class Header extends Component {
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
                        <Link to = '/'>Logout</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
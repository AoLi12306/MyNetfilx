import React, { Component } from 'react'

import netflixLogo from './Netflix.jpg';
import './nav.css';

export default class Nav extends Component {    
    
    render() {
 
        return (
            <div className="row align-items-center">
                <img className="nav-bg-img" src={netflixLogo} />
            </div>
        );
    }
};
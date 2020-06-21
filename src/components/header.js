import React, { Component } from 'react';
import redVen from '../image/Red-Ventures.jpg'
import slackLogo from '../image/slacklogo.png'
import NavBar1 from './navbar'

class Header extends Component {
    render() {
        return (
            <React.Fragment>

                <NavBar1 />
                <div id="diver"></div>
                <div className="header1x">

                    <div className="red-head">
                        <img src={redVen} id="red-logo" alt="red logo" />
                        <img src={slackLogo} id="slacklogo" alt="slack logo" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
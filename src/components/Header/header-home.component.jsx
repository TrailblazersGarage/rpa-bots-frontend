import React, { Component } from 'react';
import './header.style.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import BuyMeACoffeeBtn from "../Buttons/buy-me-a-coffee-component";

class HeaderHomeComponent extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <a className="btn btn-white btn-animated" href="/api/v1/auth/google">Sign in</a>
                )
            default:
                return (
                    <Link to="/myapps"><FontAwesomeIcon icon={faArrowCircleRight} title="Go to Dashboard" size="2x" color="black"/></Link>
                    )
        }
    }
    render() {
        return (
            <header className='header-home'>
                <div className='text-box'>
                    <h1 className='heading-primary'>
                        <span className='heading-primary-main'>9dapps</span>
                    </h1>
                    <h2 className="f2 mt0">Automation Bots and Mobile Apps</h2>
                    <BuyMeACoffeeBtn />
                    {this.renderContent()}
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(HeaderHomeComponent);

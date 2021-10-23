import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.style.css';

class HeaderComponent extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            default:
                return (
                    <div className="flex-grow pa3 flex items-center">
                        <Link to="/myapps" className="f4 link dib white dim mr3 mr4-ns">Tasks</Link>
                        <Link to="/myapps/dashboard" className="f4 link dib white dim mr3 mr4-ns">Projects</Link>
                        <a className="f4 link dib white dim mr3 mr4-ns" href="/api/v1/logout">Logout</a>
                        <a href="https://discord.gg/t472jwwpJa" target="_blank" rel="noopener noreferrer" className="f4 link dib white dim mr3 mr4-ns"><button className="f4 no-underline pv2 ph4 br-pill ba b--white-20">Chat</button></a>
                    </div>
                )
        }
    }
    render() {
        return (
           <nav className="flex bb b--white-10 dapps-color">
                   <Link
                       to={this.props.auth ? '/myapps': '/'}
                       className="link white-70 hover-white no-underline flex items-center pa3"
                   >
                       9DAPPS
                   </Link>
                   { this.renderContent() }
           </nav>
        )
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(HeaderComponent);
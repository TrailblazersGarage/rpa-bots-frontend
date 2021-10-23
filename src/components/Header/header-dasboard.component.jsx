import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';


class HeaderDashboardComponent extends Component {

    render() {
        return (
            <header className="header">
                <div className="header_search"><button style={{border: "0", background: "transparent"}}
                    onClick={this.props.history.goBack}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} size="2x" />
                     Back
                </button></div>
                <div className="header_avatar">
                    <a className="f4 link dib black dim mr3 mr4-ns" href="/api/v1/logout">
                        Logout
                        <FontAwesomeIcon icon={faArrowCircleRight} size="2x" />
                    </a>
                </div>
            </header>
        )
    }
}

export default withRouter(HeaderDashboardComponent);
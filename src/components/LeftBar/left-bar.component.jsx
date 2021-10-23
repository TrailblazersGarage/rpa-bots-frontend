import React, { Component } from "react";
import {Link} from "react-router-dom";
import {faMobile, faProjectDiagram} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class LeftBarComponent extends Component {
    render() {
        return (
            <aside className="aside">
                <div className="aside_close-icon">
                    <strong>&times;</strong>
                </div>
                <ul className="aside_list">
                    <Link to="/myapps/dashboard" className="link white"><li className="aside_list-item"><FontAwesomeIcon icon={faProjectDiagram} size="1x" /> Projects</li></Link>
                    <Link to="/" className="link white"><li className="aside_list-item"><FontAwesomeIcon icon={faMobile} size="1x" /> Apps Catalog</li></Link>
                </ul>
            </aside>
        )
    }
}

export default LeftBarComponent;
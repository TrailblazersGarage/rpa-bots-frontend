import React, { Component } from 'react';
import {trackGoogleAnalyticsPageView} from "../../utils/google-analytics";
import ProjectList from "../Project/project-list.component";


class Dashboard extends Component {

    componentDidMount() {
        trackGoogleAnalyticsPageView(window.location.pathname + window.location.search);
    }

    render() {
        return (
            <div>

                <ProjectList />
            </div>
        )
    }
}

export default Dashboard;
import React, { Component } from 'react';
import ProjectForm from "./project-form-component";
import HeaderDashboardComponent from "../../components/Header/header-dasboard.component";
import LeftBarComponent from "../../components/LeftBar/left-bar.component";

class ProjectNew extends Component {
    render() {
        return (
            <div>
                <div className="grid-container">
                    <div className="menu-icon">
                        <strong> &#9776;</strong>
                    </div>
                    <HeaderDashboardComponent />,
                    <LeftBarComponent />,
                    <main className="main">
                        <div className="main_overview">
                            <ProjectForm />
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default ProjectNew;
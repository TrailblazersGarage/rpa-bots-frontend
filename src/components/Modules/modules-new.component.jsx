import React, { Component } from 'react';
import ModuleForm from "./modules-form-component";
import HeaderDashboardComponent from "../Header/header-dasboard.component";
import LeftBarComponent from "../LeftBar/left-bar.component";

class ModuleNew extends Component {

    render(){
        return (
            <div className="grid-container">
                <div className="menu-icon">
                    <strong> &#9776;</strong>
                </div>
                <HeaderDashboardComponent />,
                <LeftBarComponent />,
                <main className="main">
                    <div className="main_overview">
                         <ModuleForm />;
                    </div>
                </main>
            </div>
        );
    }
}

export default ModuleNew;
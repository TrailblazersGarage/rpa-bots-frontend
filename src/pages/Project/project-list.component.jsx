import React, {useEffect, useState, useMemo} from 'react';
import axios from "axios";
import Table from "../../components/Table/table";
import { Link } from 'react-router-dom';
import './project.style.css';
import Status from "../../components/Table/status";
import LeftBarComponent from "../../components/LeftBar/left-bar.component";
import HeaderDashboardComponent from "../../components/Header/header-dasboard.component";
import {faCheckCircle, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartBar} from "@fortawesome/free-solid-svg-icons/faChartBar";
import {MessageBox} from "../../components/Messages/message-box.component";

function ProjectList(){
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await axios('/api/v1/projects', { headers: { "x-9dapps-token": "token"} });
            setData(result.data);
        })();
    }, []);

    const columns = useMemo(
        () => [
            {
                Header: "Example of projects",
                // First group columns
                columns: [
                    {
                        Header: "Project",
                        accessor: "name",
                        Cell: ({ cell: { value } }) => <Status values={value} />
                    },
                    {
                        Header: "Description",
                        accessor: "description"
                    },
                    {
                        Header: "Action",
                        accessor: "_id",
                        Cell: props => (
                            <div>
                                <Link to={`/myapps/modules?project=${props.value}`}>Modules</Link>
                            </div>
                        )
                    }
                ]
            }
        ], []);

    return (
            <div className="grid-container">
                <div className="menu-icon">
                    <strong> &#9776;</strong>
                </div>
                <HeaderDashboardComponent />,
                <LeftBarComponent />,
                <main className="main">
                    <div className="main_overview">
                        <div className="overview_card">
                            <div className="overview_card-info">Payment Status</div>
                            <div className="overview_card-icon"><FontAwesomeIcon icon={faCheckCircle} size="2x"/></div>
                        </div>
                        <div className="overview_card">
                            <div className="overview_card-info">n projects</div>
                            <div className="overview_card-icon"><FontAwesomeIcon icon={faChartBar} size="2x"/></div>
                        </div>
                        <div className="overview_card">
                            <div className="overview_card-info">n modules</div>
                            <div className="overview_card-icon"><FontAwesomeIcon icon={faChartBar} size="2x"/></div>
                        </div>
                        <div className="overview_card">
                            <div className="overview_card-info">n tasks</div>
                            <div className="overview_card-icon"><FontAwesomeIcon icon={faChartBar} size="2x"/></div>
                        </div>
                    </div>
                    <div className="main_overview">
                        <Link to="/myapps/project/new" className="f4 link dib white dim mr3 mr4-ns">
                            <button
                                type="submit"
                                data-testid="form-submit"
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                                aria-label="Add Project">
                                <FontAwesomeIcon icon={faPlus} />
                                Add Project
                            </button>
                        </Link>
                        <Table columns={columns} data={data} />
                        <MessageBox message="Let's apply the principle 'Divide and Conquer' to better control all the things we need to build for your fantastic app by splitting the project into modules and tasks." />
                    </div>
                </main>
            </div>
    )
}

export default ProjectList;
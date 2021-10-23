import React, {useEffect, useMemo, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Table from "../../components/Table/table";
import Status from "../../components/Table/status";
import HeaderDashboardComponent from "../../components/Header/header-dasboard.component";
import LeftBarComponent from "../../components/LeftBar/left-bar.component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

function ModuleList(){
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const query = new URLSearchParams(window.location.search);
            const result = await axios('/api/v1/modules', {params: { projectId: query.get("project")}}, { headers: { "x-9dapps-token": "token"} });
            setData(result.data);
        })();
    }, []);

    const columns = useMemo(
        () => [
            {
                Header: "Sub Modules of a Project",
                // First group columns
                columns: [
                    {
                        Header: "Name",
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
                                <Link to={`/myapps/tasks?module=${props.value}`}>Tasks</Link>
                            </div>
                        )
                    }
                ]
            }
        ], []);

    // Get from URL the project ID
    const query = new URLSearchParams(window.location.search);

    return (
        <div className="grid-container">
            <div className="menu-icon">
                <strong> &#9776;</strong>
            </div>
            <HeaderDashboardComponent />,
            <LeftBarComponent />,
            <main className="main">
                <div className="main_overview">
                    <Link className="f4 link dib white dim mr3 mr4-ns" to={'/myapps/module/new?project='+ query.get("project") }>
                        <button
                            type="submit"
                            data-testid="form-submit"
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                            aria-label="Add Project">
                            <FontAwesomeIcon icon={faPlus} />
                            Add Module
                        </button>
                    </Link>
                    <Table columns={columns} data={data} />
                </div>
            </main>
        </div>
    )
}

export default ModuleList;
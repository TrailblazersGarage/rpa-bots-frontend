import React from 'react';
import AppCardComponent from "./app-card.component";
import './apps.style.css';

const AppCardListComponent = ({ apps })  => {
        return (
            <div id="catalog" className="flex-container">
                {
                    apps.map((app, i) => {
                        return (
                              <AppCardComponent
                                    key={apps[i].id}
                                    id={apps[i].id}
                                    name={apps[i].name}
                                    description={apps[i].description}
                                    repo_url={apps[i].html_url}
                                />
                        );
                    })
                }
            </div>
    );
}

export default AppCardListComponent;
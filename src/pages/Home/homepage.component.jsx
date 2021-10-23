import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchHome from "../../components/Search/search-home.component"
import AppCardListComponent from "../../components/Apps/app-card-list.component";
import HeaderHomeComponent from "../../components/Header/header-home.component";
import {requestPublicRepos, setSearchInput} from "../../actions";
import Footer from "../../components/Footer/footer-component";
import {trackGoogleAnalyticsPageView} from "../../utils/google-analytics";

/**
 * What state we need to listen to and send as props
 * @param state
 * @returns {{searchInput: (string)}}
 */
const mapStateToProps = state => {
    return {
        searchInput: state.searchGithub.searchInput,
        apps: state.requestRepos.repos,
        isPending: state.requestRepos.isPending,
        error: state.requestRepos.error
    }
};

/**
 * What props need to be listen to trigger an action
 * @param dispatch
 * @returns {{onSearchChange: (function(*): *)}}
 */
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchInput(event.target.value)),
        onRequestPublicRepos: () => dispatch(requestPublicRepos())
    }
};

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            apps: []
        }
    }

    componentDidMount() {
       this.props.onRequestPublicRepos();
       trackGoogleAnalyticsPageView(window.location.pathname + window.location.search);
    }

    render() {
        const { searchInput, onSearchChange, apps, isPending } = this.props;
        const filteredApps = (apps) ? apps.filter(app => { return app.description.toLowerCase().includes(searchInput.toLowerCase()) }) : 'react';
        return (isPending) ?
            <h3>Loading</h3> :
            (
                <div className="App">
                    <HeaderHomeComponent />
                    <SearchHome searchChange={onSearchChange}/>
                    <AppCardListComponent apps={filteredApps}/>
                    <Footer />
                </div>
            );
    }
}
// HOC
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
import {
    REQUEST_APPS_9DAPPS_SERVER_SUCCESS,
    REQUEST_APPS_9DAPPS_SERVER_PENDING,
    REQUEST_APPS_9DAPPS_SERVER_FAILED
} from "../../actions/types";

const initial9DAppsServerRepos = {
    isPending: false,
    apps: [],
    error: ''
};

export const requestReposFrom9DAppsServer = ( state = initial9DAppsServerRepos, action = {}) => {
    switch(action.type) {
        case REQUEST_APPS_9DAPPS_SERVER_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_APPS_9DAPPS_SERVER_SUCCESS:
            return Object.assign({}, state, { apps: action.payload, isPending: false });
        case REQUEST_APPS_9DAPPS_SERVER_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;
    }
};

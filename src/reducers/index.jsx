import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import reduceReducers from "reduce-reducers";
import { searchGithubRepos, requestPublicRepos } from "./github/githubReposReducer";
import { requestReposFrom9DAppsServer } from "./apps/dappsServerReducer";
import { reducer as reduxForm } from 'redux-form';
import LocalStorageReducer from "./localstorage/localStorage";
import TasksReducer from "./tasks/tasksReducer";
import initialState from "./initialState";


const tasksReducer = reduceReducers(initialState, LocalStorageReducer, TasksReducer);

/**
 * Define our state keys
 * key: auth
 */
export default combineReducers({
    auth: authReducer,
    tasks: tasksReducer,
    searchGithub: searchGithubRepos,
    requestRepos: requestPublicRepos,
    requestDApps: requestReposFrom9DAppsServer,
    form: reduxForm
});
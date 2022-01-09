import axios from 'axios';
import {
    FETCH_USER,
    CHANGE_SEARCH_FIELD,
    REQUEST_GIT_REPOS_SUCCESS,
    REQUEST_GIT_REPOS_PENDING,
    REQUEST_GIT_REPOS_FAILED,
    REQUEST_APPS_9DAPPS_SERVER_FAILED,
    REQUEST_APPS_9DAPPS_SERVER_PENDING,
    REQUEST_APPS_9DAPPS_SERVER_SUCCESS,
    ADD_ITEM,
    CANCEL_EDIT_ITEM,
    FETCH_ALL,
    DELETE_ITEM,
    EDIT_ITEM,
    ITEM_COMPLETION,
    REORDER_ITEM,
    SELECT_EDIT_ITEM,
} from "./types";

export const fetchUser = () => async dispatch => {
    const currentUser = await axios.get('/api/v1/current_user', { headers: { "x-9dapps-token": "token"} });
    dispatch({ type: FETCH_USER, payload: currentUser.data });
};

export const handleStripePaymentOnModule = () => async dispatch => {
    const res = await axios.post('/api/v1/stripe', { headers: { "x-9dapps-token": "token"} });
    dispatch({ type: FETCH_USER, payload: res.data }); // TODO this should be in FETCH_MODULE
};

export const setSearchInput = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    };
};

/**
 * High Order function, a function that returns another function
 * Get apps from Github
 * @returns {function(...[*]=)}
 */
export const requestPublicRepos = () => (dispatch) => {
    dispatch({ type: REQUEST_GIT_REPOS_PENDING});
    fetch('https://api.github.com/users/TrailblazersGarage/repos?sort=updated')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_GIT_REPOS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_GIT_REPOS_FAILED, payload: error }))
};

/**
 * High Order function, a function that returns another function
 * Get apps from 9dapps server
 * @returns {function(...[*]=)}
 */
export const requestReposFrom9DAppsServer = () => (dispatch) => {
    dispatch({ type: REQUEST_APPS_9DAPPS_SERVER_PENDING});
    fetch('/api/v1/apps',
        {headers: {'x-9dapps-token': 'token'}})
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_APPS_9DAPPS_SERVER_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_APPS_9DAPPS_SERVER_FAILED, payload: error }))
};

export const LoadStateLocalStorage = (moduleId) => async dispatch => {
    const allTasks = await axios.get('/api/v1/tasks/' + moduleId , { headers: { "x-9dapps-token": "token"} });
    dispatch({ type: FETCH_ALL, payload: allTasks.data });
};

export const AddItem = (itemValue, moduleId) => async dispatch => {
    const task = await axios.post('/api/v1/tasks', {data: itemValue, moduleId: moduleId}, { headers: { "x-9dapps-token": "token"} });
    dispatch({ type: ADD_ITEM, payload: task.data });
};

export const CancelEditItem = () => ({
    type: CANCEL_EDIT_ITEM,
    payload: {},
});

export const DeleteItem = selectedItemId => async dispatch => {
    await axios.delete('/api/v1/tasks/' + selectedItemId, { headers: { "x-9dapps-token": "token"} });
    dispatch({ type: DELETE_ITEM, payload: selectedItemId });
};

export const EditItem = modifiedItem => async dispatch => {
    const itemEdited = await axios.put('/api/v1/tasks', modifiedItem, { headers: { "x-9dapps-token": "token"} });
    dispatch({ type: EDIT_ITEM, payload: itemEdited.data });
};

export const ItemCompletion = modifiedItem => async dispatch => {
    const itemCompleted = await axios.put('/api/v1/tasks', modifiedItem, { headers: { "x-9dapps-token": "token"} });
    dispatch({ type: ITEM_COMPLETION, payload: itemCompleted.data });
};

export const ReorderItem = (initialPosition, newPosition) => ({
    type: REORDER_ITEM,
    payload: { initialPosition, newPosition },
});

export const SelectEditItem = id => ({
    type: SELECT_EDIT_ITEM,
    payload: { id },
});

export const submitModule = (values, project, history) => async dispatch => {
    const res = await axios.post('/api/v1/modules', {values, project}, { headers: { "x-9dapps-token": "token"} });

    history.push('/myapps/tasks?module=' + res.data._id);
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const submitProject = (values, history) => async dispatch => {
    const res = await axios.post('/api/v1/projects', values, { headers: { "x-9dapps-token": "token"} });

    history.push('/myapps/projects');
    dispatch({ type: FETCH_USER, payload: res.data });
}
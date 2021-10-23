import {
    CHANGE_SEARCH_FIELD,
    REQUEST_GIT_REPOS_SUCCESS,
    REQUEST_GIT_REPOS_PENDING,
    REQUEST_GIT_REPOS_FAILED
} from "../../actions/types";

const initialStateSearch = {
  searchInput: ''
};

const initialStatePublicRepos = {
    isPending: false,
    repos: [],
    error: ''
};

export const searchGithubRepos = (state = initialStateSearch, action = {}) => {
  switch(action.type){
      // Another state object is created from previous state
      // Below we're using object spread operator / object destructuring
      // Alternative: Object.assign({}, state, { setSearchInput: action.payload })
      case CHANGE_SEARCH_FIELD:
          return { ...state, searchInput: action.payload };
      default:
          return state;
  }
};

export const requestPublicRepos = ( state = initialStatePublicRepos, action = {}) => {
    switch(action.type) {
        case REQUEST_GIT_REPOS_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_GIT_REPOS_SUCCESS:
            return Object.assign({}, state, { repos: action.payload, isPending: false });
        case REQUEST_GIT_REPOS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;
    }
};

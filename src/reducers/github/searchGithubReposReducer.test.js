import {
    CHANGE_SEARCH_FIELD
} from "../../actions/types";
import * as reducers from './githubReposReducer';

describe('searchTrailblazersGaragePublicRepos', () => {
    const initialStateSeach = { searchInput: '' };

    it('should return the initial state', () => {
        expect(reducers.searchGithubRepos(undefined)).toEqual({ searchInput: ''})
    });

    it('should handle CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchGithubRepos(initialStateSeach, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'awsbot'
        })).toEqual({
           searchInput: 'awsbot'
        })
    })
});
import authReducer from "./authReducer";

describe('authUser', () => {
    it('should return the initial state', () => {
        expect(authReducer(undefined,{})).toEqual(null)
    })
});
export type ActionType = {
    type: string;
    payload: any;
}

export const Actions = {
    setUserIdentifier: 'setUserIdentifier',
    setIsAuthenticated: 'setIsAuthenticated',
    setToken: 'setToken',
    setBorrowedList: 'setBorrowedList',
    setFavoritesList: 'setFavoritesList',
};

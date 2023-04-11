export type InitialStateType = {
    userIdentifier : string;
    isAuthenticated : boolean;
    token: string;
}

export const initialState = {
    userIdentifier: '',
    isAuthenticated: false,
    token: '',
};
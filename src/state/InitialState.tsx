export type InitialStateType = {
  userIdentifier: string;
  isAuthenticated: boolean;
  token: string;
  borrowedList: string[];
  favoritesList: string[];
};

export const initialState = {
    userIdentifier: '',
    isAuthenticated: false,
    token: '',
    borrowedList: [],
    favoritesList: [],
};
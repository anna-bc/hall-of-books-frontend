import { Actions, ActionType } from "../actions/Actions";
import { InitialStateType } from "../InitialState";

function stateReducer(
  state: InitialStateType,
  action: ActionType
): InitialStateType {
  switch (action.type) {
    case Actions.setUserIdentifier:
      return { ...state, userIdentifier: action.payload.userIdentifier };

    case Actions.setIsAuthenticated:
      return { ...state, isAuthenticated: action.payload.isAuthenticated };

    case Actions.setToken:
      return { ...state, token: action.payload.token };

    case Actions.setBorrowedList:
      return { ...state, borrowedList: action.payload.borrowedList };

    case Actions.setFavoritesList:
      return { ...state, favoritesList: action.payload.favoritesList };

    default:
      return state;
  }
}

export default stateReducer;

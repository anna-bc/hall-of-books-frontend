import { Actions, ActionType } from "../actions/Actions";
import { InitialStateType } from "../InitialState";

function stateReducer(state : InitialStateType, action: ActionType) : InitialStateType {
    switch (action.type) {
        case Actions.setUserIdentifier:
            return {...state, userIdentifier: action.payload.userIdentifier};

        case Actions.setIsAuthenticated:
            return {...state, isAuthenticated: action.payload.isAuthenticated};

        case Actions.setToken:
            return {...state, token: action.payload.token};

        default:
            return state;
    }
}

export default stateReducer;

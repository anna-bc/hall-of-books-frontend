import React, { createContext, Dispatch, SetStateAction } from "react";
import { ActionType } from "../actions/Actions";
import { initialState, InitialStateType } from "../InitialState";

type IStateContext = {
    state: InitialStateType;
    dispatch: Dispatch<ActionType>;
};

export const StateContext = createContext<IStateContext>({ state: initialState, dispatch: (ActionType) => null});

import {RootState} from "./store";
import {Action} from "@reduxjs/toolkit";
import {LOGSTUFF} from "./actions";

const initialState: RootState = {}

export function noteReducer(state: RootState = initialState, action: Action): RootState {
    switch (action.type) {
        case LOGSTUFF:
            console.log('hey');
            return state;
        default:
            return state;
    }
}
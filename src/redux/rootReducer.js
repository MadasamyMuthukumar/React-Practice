import { cakeReducer } from "./cakes/cakeReducer";
import { iceReducer } from "./ice/iceReducer";

import { combineReducers } from "redux";

export const rootReducer=combineReducers({
    cake:cakeReducer,
    ice:iceReducer
})
import { combineReducers } from "redux";
import { NotificationReducers } from "./NotificationReducers";

export const rootReducer = combineReducers({
    notification: NotificationReducers,
})
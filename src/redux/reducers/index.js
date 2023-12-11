import usersReducer from "./users-reducer.js";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    users: usersReducer
})


export default rootReducer





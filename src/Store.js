import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Count } from "./Reducers";

const Store=()=>{
    const ConfigStore=createStore(combineReducers({
        c:Count
    }),
    applyMiddleware(thunk))
    return ConfigStore
}

export default Store
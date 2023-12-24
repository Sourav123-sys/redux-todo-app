import TodoReducer from "./Todos/Reducer"
import FilterReducer from "./Filters/Reducer"


import { combineReducers } from "redux"


const rootReducer = combineReducers({
    todos: TodoReducer,
    filters : FilterReducer
    
})

export default rootReducer
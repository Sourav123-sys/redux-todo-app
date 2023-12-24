
import {ADDED,ALCOMPLETE,DELETED,SELECTCOLOR,TOGGOLED,CLEARCOMPLETE} from "./ActionType"

export const  added = (todotext) => {
    return{
        type: ADDED,
        payload:todotext
    }
}
export const  toggoled = (todoId) => {
    return{
        type: TOGGOLED,
        payload:todoId 
    }
}
export const  selectColor = (todoId,color) => {
    return{
        type: SELECTCOLOR,
        payload: {
            todoId : todoId,
            color : color
        }
    }
}
export const  deleted = (todoId) => {
    return{
        type: DELETED,
        payload:todoId 
    }
}
export const  allCompleted = () => {
    return{
        type: ALCOMPLETE,
      
    }
}
export const  clearCompleted = () => {
    return{
        type: CLEARCOMPLETE,
      
    }
}
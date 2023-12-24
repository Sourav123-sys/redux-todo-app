
import {ADDED,ALLCOMPLETE,DELETED,SELECTCOLOR,TOGGLED,CLEARCOMPLETE} from "./ActionType"

export const added = (todotext) => {
    console.log(todotext);
    return{
        type: ADDED,
        payload:todotext
    }
}
export const  toggled = (todoId) => {
    return{
        type: TOGGLED,
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
        type: ALLCOMPLETE,
      
    }
}
export const  clearCompleted = () => {
    return{
        type: CLEARCOMPLETE,
      
    }
}
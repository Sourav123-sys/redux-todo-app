import { initialState } from "./InitialState";
import { ADDED, ALLCOMPLETE, CLEARCOMPLETE, DELETED, SELECTCOLOR, TOGGLED } from "./ActionType"


const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}


const reducer = (state = initialState, action) => {
    
    switch (action.type) {

        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                    completed: false,
                }

            ]
        case TOGGLED:
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed :!todo.completed
                    }
                }
                else {
                    return todo
                }
            })
        
        
        
        case DELETED:
            return state.filter(todo => todo.id !== action.payload);
           
     case ALLCOMPLETE:
                return state.map(todo => {
                    return {
                        ...todo,
                        completed : true
                  }
              })
                
           
        case CLEARCOMPLETE:
            return state.filter(todo => !todo.completed);

        
            case SELECTCOLOR: {
                const { todoId, color } = action.payload;
                
                return state.map(todo => {
                    if (todo.id === todoId) {
                        return {
                            ...todo,
                            color: color
                        };
                    } else {
                        return todo;
                    }
                });
            }
            
        default:
           return state;
}

}

export default reducer;
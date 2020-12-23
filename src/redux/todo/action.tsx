import {SET_ADD_TODO} from '../../constant/variable';
import {TodoObjectType} from './reducer';

type TodoPayloadType ={
    todo: TodoObjectType,
}

interface AddTodoActionType {
    type: typeof SET_ADD_TODO,
    payload: TodoPayloadType,
}

export function addTodo(todo: TodoObjectType) : AddTodoActionType {
    return {
        type: SET_ADD_TODO,
        payload: {
            todo,
        }
    }
}

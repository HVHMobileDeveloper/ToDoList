import {PRIORITY_HIGH, PRIORITY_MEDIUM, PRIORITY_LOW, PUSH_ADD_TODO} from '../../constant/variable';

export type TodoObjectType = {
    title: string,
    priority: typeof PRIORITY_HIGH | typeof PRIORITY_MEDIUM | typeof PRIORITY_LOW,
    dueTime: Date,
}

type PayloadType = {
    todo: string,
}

interface InitStateType {
    todos: Array<TodoObjectType>,
}

export interface ActionTodoType {
    type: string,
    payload: PayloadType,
}

const INIT_STATE : InitStateType  = {
    todos: [],
}

export default (state = INIT_STATE, action: ActionTodoType) => {
    switch (action.type) {
        case PUSH_ADD_TODO:
            const newTodos = [...state.todos, action.payload.todo];
            return {
                ...state,
                todos: newTodos.sort( (a: TodoObjectType, b: TodoObjectType) => {
                    return b.priority - a.priority;
                }),
            };
        default:
            return state;
    }
};

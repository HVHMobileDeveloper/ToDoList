import {SET_ADD_TODO} from '../../constant/variable';

const INIT_STATE = {
    todos: '',
}

interface actionType {
    type: string,
    payload: any,
}

export default (state = INIT_STATE, action: actionType) => {
    switch (action.type) {
        case SET_ADD_TODO:
            return {
                ...state,
                todos: action.payload.todos,
            };
        default:
            return state;
    }
};

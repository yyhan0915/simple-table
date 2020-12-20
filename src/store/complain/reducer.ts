import { createReducer } from 'typesafe-actions';
import { ComplainAction } from './actions';
import { CHANGE_FIELD, ADD_COMPLAIN } from './constants';
import { initialState, InitialStateType } from './states';

const complain = createReducer<InitialStateType, ComplainAction>(initialState, {
    [ADD_COMPLAIN]: state => ({
        ...state,
        complain: [
            ...state.complain,
            {
                id: state.complain[state.complain.length - 1].id + 1,
                description: '',
                screenshot: { title: '', desc: '', file: '' },
            },
        ],
    }),
    [CHANGE_FIELD]: (state, action) => ({
        ...state,
        complain: [
            ...state.complain.map(element => {
                if (element.id == action.payload.id) {
                    if (action.payload.key == 'title' || action.payload.key == 'desc' || action.payload.key == 'file') {
                        return {
                            ...element,
                            screenshot: { ...element.screenshot, [action.payload.key]: action.payload.value },
                        };
                    }
                    return { ...element, [action.payload.key]: action.payload.value };
                }
                return element;
            }),
        ],
    }),
});

export default complain;

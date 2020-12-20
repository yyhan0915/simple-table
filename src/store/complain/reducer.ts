import { ComplainAction } from './actions';
import { initialState, InitialStateType } from './states';
import { Reducer } from 'react';
import { CHANGE_FIELD } from './constants';

const complain: Reducer<InitialStateType, ComplainAction> = function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_FIELD:
            return {
                ...state,
                complain: [
                    ...state.complain.map(element => {
                        if (element.id == action.payload.id) {
                            if (
                                action.payload.key == 'title' ||
                                action.payload.key == 'desc' ||
                                action.payload.key == 'file'
                            ) {
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
            };
    }
};

export default complain;

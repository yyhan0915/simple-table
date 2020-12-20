import { createAction, ActionType } from 'typesafe-actions';
import { ADD_COMPLAIN, CHANGE_FIELD } from './constants';

export const changeField = createAction(
    CHANGE_FIELD,
    ({ id, key, value }: { id: number; key: string; value: string }) => ({
        id,
        key,
        value,
    }),
)();

export const addComplain = createAction(ADD_COMPLAIN)();

const actions = { changeField, addComplain };

export type ComplainAction = ActionType<typeof actions>;

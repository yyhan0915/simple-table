import { createAction } from 'typesafe-actions';
import { CHANGE_FIELD } from './constants';

export const changeField = createAction(
    CHANGE_FIELD,
    ({ id, key, value }: { id: number; key: string; value: string }) => ({
        id,
        key,
        value,
    }),
)();

export type ComplainAction = ReturnType<typeof changeField>;

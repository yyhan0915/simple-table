import { ComplainType } from './../../model/type/ComplainType';

export type InitialStateType = {
    complain: ComplainType[];
};

export const initialState: InitialStateType = {
    complain: [{ id: null, description: '', screenshot: { title: '', desc: '', file: '' } }],
};

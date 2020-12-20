import { ComplainType } from './../../model/type/ComplainType';

export type InitialStateType = {
    complain: ComplainType[];
};

export const initialState: InitialStateType = {
    complain: [{ id: 0, description: '', screenshot: { title: '', desc: '', file: '' } }],
};

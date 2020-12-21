import { createSelector } from 'reselect';
import { InitialStateType } from './states';

const getState = (state: RootState): InitialStateType => state.complain;

export const complainState = createSelector([getState], state => state.complain);

import { combineReducers } from 'redux';
import loading from './loading/reducer';
import complain from './complain/reducer';

const rootReducer = combineReducers({
    loading,
    complain,
});

// rootReducer & type of rootReducer
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

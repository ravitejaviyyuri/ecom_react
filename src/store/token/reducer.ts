import TOKEN_ACTION from './action';
import { Dispatch, AppState } from '../AppContext';

const TokenReducer = (state: AppState, action: Dispatch) => {
   console.log(action.data);
   switch(action.action) {
    case TOKEN_ACTION.action.UPDATE_TOKEN_INFO: {
        return {
            ...state,
            userState: {
                ...state.userState,
                tokenInfo : action.data
            }
        };
    }
    default:
        return state;
   }
};

export default TokenReducer;
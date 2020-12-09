import USER_ACTION from './action';
import { Dispatch, AppState } from '../AppContext';
import { remove } from 'lodash';

const UserReducer = (state: AppState, action: Dispatch) => {
  switch (action.action) {

    case USER_ACTION.action.UPDATE_LOGIN: {
      console.log(action.data);
      return {
        ...state,
        userState: {
          ...state.userState,
          userInfo: {
            ...state.userState.userInfo,
            userDetails: action.data,
          },
        },
      };
    }
    case USER_ACTION.action.UPDATE_LOGOUT: {
        return {
            ...state,
            userState: {
              ...state.userState,
              userInfo: {
                ...state.userState.userInfo,
                userDetails: action.data,
              },
            },
          };
        }
      case USER_ACTION.action.UPDATE_SIGNUP: {
        return {
            ...state,
        userState: {
          ...state.userState,
          userInfo: {
            ...state.userState.userInfo,
            userDetails: action.data,
          },
        },
      };
    }
    default:
        return state;
    }
  };
  
  export default UserReducer;
  
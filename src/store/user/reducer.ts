import USER_ACTION from './action';
import { Dispatch, AppState } from '../AppContext';
import { remove } from 'lodash';

const UserReducer = (state: AppState, action: Dispatch) => {
  console.log("inreducer");
  console.log(action.data);
  switch (action.action) {
    case USER_ACTION.action.UPDATE_LOGIN: {
      return {
        ...state,
        userState: {
          ...state.userState,
          userInfo: {
            userDetails: action.data.userData,
            loginStatus: action.data.loginStatus
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
                userDetails: action.data.userInfo.userDetails,
                loginStatus: action.data.userInfo.loginStatus
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
  
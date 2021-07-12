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
        console.log("signout");
        console.log(action.data.userData)
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
    case USER_ACTION.action.UPDATE_COUNTRY: {
      
      console.log(action.data.val)
        return {
            ...state,
        userState: {
          ...state.userState,
          userInfo: {
            ...state.userState.userInfo,
              userDetails:{
                ...state.userState.userInfo.userDetails,
                currencyPrefrence:action.data.currency,
                country:action.data.country,
                countryCode: action.data.countryCode,
                mobileCode : action.data.mobileCode
              },
              ...state.userState.userInfo.loginStatus
          },
        },
      };
    }
    case USER_ACTION.action.BASIC_AUTO_POPULATE_INFO: {
      
      console.log(action.data.val)
        return {
            ...state,
        userState: {
          ...state.userState,
          userInfo: {
            ...state.userState.userInfo,
              userDetails:{
                ...state.userState.userInfo.userDetails,
                emailAddress:action.data.email,
                mobileNo:action.data.phone,
              },
              ...state.userState.userInfo.loginStatus
          },
        },
      };
    }

    default:
        return state;
    }
  };
  
  export default UserReducer;
  
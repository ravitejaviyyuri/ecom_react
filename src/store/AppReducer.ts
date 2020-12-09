import UserReducer from './user/reducer';
import UPDATE_USER_STATE from './user/action';
import { Dispatch, AppState } from './AppContext';

const AppReducer = (state: AppState, action: Dispatch) => {
  switch (action.type) {
    case UPDATE_USER_STATE.type: {
      return UserReducer(state, action);
    }
    default:
      return UserReducer(state, action);
  }
};
export default AppReducer;

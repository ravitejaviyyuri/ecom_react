import UserReducer from './user/reducer';
import UPDATE_USER_STATE from './user/action';
import CourseReducer from './course/reducer';
import COURSE_ACTION from './course/action';
import TokenReducer from './token/reducer';
import TOKEN_ACTION from './token/action';
import { Dispatch, AppState } from './AppContext';

const AppReducer = (state: AppState, action: Dispatch) => {
  switch (action.type) {
    case UPDATE_USER_STATE.type: {
      return UserReducer(state, action);
    }
    case COURSE_ACTION.type: {
      return CourseReducer(state, action);
    }
    case TOKEN_ACTION.type: {
      return TokenReducer(state, action);
    }
    default:
      return UserReducer(state, action);
  }
};
export default AppReducer;

import COURSE_ACTION from './action';
import { Dispatch, AppState } from '../AppContext';

const CourseReducer = (state: AppState, action: Dispatch) => {
   console.log(action.data);
   switch(action.action) {
    case COURSE_ACTION.action.ADD_SLUG_AND_ID: {
        return {
            ...state,
            userState: {
                ...state.userState,
                baseCourseInfo : action.data
            }
        };
    }
    default:
        return state;
   }
};

export default CourseReducer;
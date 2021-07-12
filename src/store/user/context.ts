import BaseCourseInfo from '../course/base_course_info';
import TokenInfo from '../token/i_token';

interface UserDetails {
    sessionId: string,
    userId: string,
    tokenId: string,
    firstName: string,
    lastName: string,
    emailAddress: string,
    mobileNo: string,
    profilePicUrl: string,
    currencyPrefrence: string,
    country:string,
    countryCode: string,
    mobileCode : string,
}

interface LoginStatus {
    islogin: boolean;
}

interface UserInfo {
    userDetails: UserDetails;
    loginStatus: LoginStatus;

}

interface UserState{
    userInfo: UserInfo;
    baseCourseInfo : BaseCourseInfo;
    tokenInfo : TokenInfo;
}

export const initState : UserState = {
    userInfo:{
        userDetails : {
            sessionId: "",
            userId:  "",
            tokenId:  "",
            firstName:  "",
            lastName:  "",
            emailAddress: "",
            mobileNo:  "",
            profilePicUrl:  "",
            currencyPrefrence:  "INR",
            country: "India",
            countryCode: "IN",
            mobileCode : "+1"
        },
        loginStatus: {
            islogin: false
        }
    },
    baseCourseInfo : {
        id: "100",
        slug: "No-course"
    },
    tokenInfo : {
        time : 0,
        token : ''
    }
}

export default UserState;



// console.log(initialState.state.userState.userInfo.userDetails.mobileNo);
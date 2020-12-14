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
    country:string
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
            country: "India"
        },
        loginStatus: {
            islogin: false
        }
    }
}

export default UserState;
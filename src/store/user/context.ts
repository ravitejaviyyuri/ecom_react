interface UserDetails {
    id: number;
    name: string;
    email: string;
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
            id: 0,
            name:"",
            email:""
        },
        loginStatus: {
            islogin: false
        }
    }
}

export default UserState;
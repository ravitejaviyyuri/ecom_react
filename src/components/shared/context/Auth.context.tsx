import React, {createContext, useState} from 'react';
// import {UserStatus} from './../../../interfaces/user'

type AuthProviderProps = {children: React.ReactNode}
type Props={
    login:boolean,
    changeStatus:any,
}

export const AuthContext = createContext<any | undefined>(undefined);

export const AuthProvider = ({children}:AuthProviderProps) => {
//    let status: Props = {
//      login:false,  
//      changeStatus: (stat: boolean)=> {
//          status.login= stat
//       }
//     }
 const [login ,setLogin] = useState(false);

   return( 
    <AuthContext.Provider  value={[login, setLogin]} >
       {children}
    </AuthContext.Provider>
   )}


//export default AuthProvider
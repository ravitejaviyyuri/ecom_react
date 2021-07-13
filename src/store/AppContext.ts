import { createContext } from 'react';
import UserState, { initState as userInit } from './user/context';

export type Dispatch = {
  data: any;
  type: string;
  action: string;
};

export type AppState = {
  userState: UserState;
  
};

export type Context = {
  state: AppState;
  dispatch(data: Dispatch): void;
};

const initialState: AppState = {
  userState: userInit,
 
};

const context: Context = {
  state: initialState,
  dispatch: (data): void => {
    throw new Error('dispatch function must be overridden');
  },
};

const AppContext = createContext<Context>(context);

export default AppContext;

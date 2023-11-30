import { create, createStore } from 'zustand';
import { User } from 'src/database/collection/user'

type UserState = {
  user: User.Payload;
  isAutenticated: boolean;
  showBarier: boolean;
  passToDashboard: boolean;
}

type UserAction = {
  setUser: ()=>{},
  setAutenticated: ()=>{},
  setUnAutenticated:()=>{},
  preventAction:()=>{},
  allowAction:()=>{},
}

// const useUser = create<UserState, UserAction>({

// })
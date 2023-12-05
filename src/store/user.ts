import { create, createStore } from 'zustand';
import { User } from 'src/database/collection/user.entity'

type UserState = {
  user: User.Expose;
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
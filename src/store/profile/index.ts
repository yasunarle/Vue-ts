import { Module, ActionTree, MutationTree, GetterTree } from 'vuex'
import { ProfileState, UserDB } from './types'
import { RootState } from '../types'

export const state: ProfileState = {
  user: undefined,
  error: false  
}

export const getters: GetterTree<ProfileState, RootState> = {
  userName(state): string {
    const { user } = state
    if ( user ){
      return user.username
    }
    return "未登録" 
  },
  welcomeUser(state): string {
    const { user } = state
    if( user ){
      return "Welcome: " + user.username 
    } else {
      return "Welcome Gest !!"
    }    
  }
}

export const mutations: MutationTree<ProfileState> = {
  setProfile(state, payload: UserDB){
    state.error = false
    state.user = payload    
  }
}

export const actions: ActionTree<ProfileState, RootState> = {
  signUpAndLogin({commit}): any {
    const payload: UserDB = {
      username: "yasunari",
      uid: "u7df25c588m737",
      email: "u7df25c588m737@gmail.com"
    }
    commit('setProfile', payload)
  }
}

export const profile: Module<ProfileState, RootState> = {
  state,
  mutations,
  actions,
  getters  
};
import { Module } from 'vuex'
import { CounterState, RootState } from '@/store/types'
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state: CounterState = {
  counter: 0
} 

export const counter: Module<CounterState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,  
}
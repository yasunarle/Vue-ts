<template>
  <div class="show-user-container component">
    <h2>Profile</h2>     
    <div v-if="profile.user">
      {{ userName }}
    </div>
    <div @click="signUpAndLogin">Log in</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component'
import { State, Action, Getter } from 'vuex-class'
import { ProfileState } from '@/store/profile/types'

@Component
export default class ShowUser extends Vue {   
  @State('profile') 
  profile!: ProfileState

  @Action('signUpAndLogin')
  signUpAndLogin: any

  @Getter('userName')
  userName!: string

  created(){
    // this.signUpAndLogin()    
  }
}
</script>

<style lang="scss">
.show-user-container{

  width: 300px;
  max-height: 300px;
}
</style>


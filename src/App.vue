<template>
  <div id="app">            
    <MyHeader/>
    <router-view></router-view>  
    <MyFooter/>  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from './components/Card.vue';
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
import axios from "axios";

@Component({
  components: {
    Card,
    MyHeader,
    MyFooter
  },
})
export default class App extends Vue {
  // data
  public msg: string = "Hello by App.vue"
}
</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0;    
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
  }
}
.component{
  height: auto;
  padding: 10px;
  box-shadow: 1px 1px 5px 1px #999;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;  
}
</style>

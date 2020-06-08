<template>
  <div class="footer">
    <div class="title">@yasunarle</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MyFooter extends Vue { 
}
</script>

<style lang="scss">
.footer{
  width: 100%;
  height: 200px;
  padding: 10px;  
  border-top: 1px solid black;
  text-align: center;
  .title{    
    font-size: 30px;
    line-height: 60px;    
  }
}
</style>
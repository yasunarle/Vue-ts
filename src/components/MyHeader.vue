<template>
  <div class="header">
    <div class="title">TypeScript App</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MyHeader extends Vue { 
}
</script>

<style lang="scss">
.header{
  width: 100%;
  height: 60px;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
  .title{
    font-size: 30px;
    line-height: 60px;    
  }
}
</style>


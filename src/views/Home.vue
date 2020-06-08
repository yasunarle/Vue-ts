<template>
  <div class="home-container">       
    <News/> 
    <ShowUser/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import News from '@/components/News.vue'
import ShowUser from '@/components/ShowUser.vue'

@Component({
  components:{
    News,
    ShowUser
  }  
})
export default class Home extends Vue {
}
</script>

<style lang="scss">
.home-container{
  min-height: 90vh;
  padding: 16px;
  display: flex;
  justify-content: space-around;
}
  
</style>

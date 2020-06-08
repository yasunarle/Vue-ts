<template>
  <div class="news-container component">
    <h2>Technology News</h2>       
    <div v-for="(article, index) in articles" :key="index"
      class="article"
    >       
      <a :href="article.url">
        <img :src="article.urlToImage"                 
          v-if="article.urlToImage"
          alt="" 
        >
      </a>
      <a class="title" :href="article.url">
        {{ article.title }}
      </a>
      <p>{{ article.description }}</p>
    </div>    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from "axios"

@Component
export default class News extends Vue { 
  // data
  public articles = null
  // methods
  public async fetchData(){  
    const url = await 'http://newsapi.org/v2/top-headlines?' +
          'country=jp&' +
          'category=technology&' +
          'apiKey=3b6fce0886f04e3b9a74b7b6b1df3790';
    const response = await axios.get(url)
    this.articles = response.data.articles    
  }
  // created
  public created(){
    this.fetchData()    
  }  
}
</script>

<style lang="scss">
.news-container{
  max-width: 500px;
  height: 600px;
  overflow: scroll;
  .article{
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    .title{
      color: darkcyan;
    }
    img{
      width: 100%;
    }
  }
}
</style>


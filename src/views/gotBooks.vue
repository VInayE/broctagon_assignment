<template>
  <div>
      <ul>
          <li v-for="(books,index) in bookList" :key="index">
          {{books.name}}
          <button @click="viewDetails(books.url)">View Details</button>
          </li>
      </ul>  
  </div>
</template>
<script>
   import router from '../router'
   import {getBooks} from '../api/api'
   export default {
     props:{
     },
     components:{
     },
     watch:{
     },
     data () {
       return {
           bookList:[],
           openbookDetails:false,
           bookDetailUrl:''
       }  
     },
     created(){   
        getBooks().then(response => {
            this.bookList = response.data
        }).catch(error => {
                console.log(error) 
        });
     },
     methods:{
         viewDetails(url){
            var indx = url.lastIndexOf('/')
            var lastChar = url.substr(indx+1, url.length);
             router.push({
                 name:'BookDetails',
                 query:{
                     bookID:lastChar
                 }
             }) 
             
         }
     }
   }
</script>
<style>
    li{
        list-style: none;
        cursor: pointer;
    }
</style>

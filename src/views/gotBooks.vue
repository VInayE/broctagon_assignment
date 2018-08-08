<template>
  <div>
      <input style="padding-left:10px;padding-right:10px;" name="input-2-3"  placeholder="Search Books" v-model="search">
      <ul>
          <li v-for="(books,index) in bookListFilteredData" :key="index">
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
           bookDetailUrl:'',
           search:''
       }  
     },
     created(){   
        getBooks().then(response => {
            this.bookList = response.data
            this.bookList.sort(function(a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            console.log(this.bookList)
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
     },
     computed:{
        bookListFilteredData:function()
    {
       var self=this;
       return this.bookList.filter(function(book){return book.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
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

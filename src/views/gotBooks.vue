<template>
  <div>
      <input name="input-2-3"  placeholder="Search Books" v-model="search">
      <ul>
          <li v-for="(books,index) in bookListFilteredData" :key="index">
          <div> {{books.name}} </div>
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
        //API call to fetch the book list
        getBooks().then(response => {
            this.bookList = response.data
            //Sorting Data
            this.bookList.sort(function(a, b) {
            var textA = a.name.toUpperCase();
            var textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
        }).catch(error => {
                console.log(error) 
        });
     },
     methods:{
         //View Book Details click
         viewDetails(url){
            //Get the Book ID from URL 
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
         //Filter function
        bookListFilteredData:function()
    {
       var self=this;
       return this.bookList.filter(function(book){return book.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
    }
    }    
   }
</script>
<style>

    ul{
        padding:0;
    }
    li{
        list-style: none;
        cursor: pointer;
        width: 150px;
        height: 150px;
        border: 1px solid #999;
        margin: 10px;
        display: inline-block;
        border-radius: 5px;
        background: #f1f1f1;
        vertical-align: top;
    }
    li > div {
        padding: 20px 18px;
        height: 65%;
    }
    input{
        padding: 12px 15px;
        border: 1px solid #999;
        border-radius: 5px;
        width: 80%;
        font-size: 14px;
    }
    button{
        padding: 8px 15px;
        background: #6cd;
        color: #fff;
        font-weight: 600;
        border: 0;
        font-size: 12px;
        border-radius: 15px;
        cursor:pointer;
        display: inline-block;
    }
</style>

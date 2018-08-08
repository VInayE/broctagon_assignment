<template>
  <div>
      <span>Book Name : </span>
      {{bookDetails.name}}<br>
      <span>Number Of Pages : </span>
      {{bookDetails.numberOfPages}}
      <br>
      <span>Author : </span>
      {{bookDetails.authors[0]}}
      <br>
      <span>Characters : </span>
      <select>
          <option v-for="characters in bookDetails.characters">{{characters}}</option>
      </select>
  </div>
</template>
<script>
   import router from '../router'
   import {getBookDetails} from '../api/api'
   export default {
     props:[],
     components:{
        
     },
     watch:{
     
     },
     data () {
       return {
          bookID:'',
          bookDetails:[]   
       }  
     },
     created(){   
      this.bookID = this.$route.query.bookID
      getBookDetails(this.bookID).then(response => {
            this.bookDetails = response.data
        }).catch(error => {
                console.log(error) 
        });
     },
     methods:{
     
     }
   }
</script>
<style>
    li{
        list-style: none;
        cursor: pointer;
    }
    span{
       font-size: 20px;
       font-weight: 800;
    }
</style>

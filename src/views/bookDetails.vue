<template>
  <div v-if="Object.keys(bookDetails).length>0">
      <button @click="backToList()">Back</button>
      <span>Book Name : </span>
      {{bookDetails.name}}<br>
      <span>Number Of Pages : </span>
      {{bookDetails.numberOfPages}}
      <br>
      <span>Author : </span>
      {{bookDetails.authors[0]}}
      <br>
      <span>Characters : </span>
      <select v-model="charac">
          <option v-for="characters in bookDetails.characters" >{{characters}}</option>
      </select><br><br><br><br>
      <character-details :charac=charac></character-details>
  </div>
</template>
<script>
   import router from '../router'
   import {getBookDetails,charactersDetails} from '../api/api'
   export default {
     props:[],
     components:{
        CharacterDetails : () => import('../components/characterDetails'),
     },
     watch:{
     },
     data () {
       return {
          bookID:'',
          bookDetails:[],
          charac:''
       }  
     },
     created(){   
      this.bookID = this.$route.query.bookID
      getBookDetails(this.bookID).then(response => {
            this.bookDetails = response.data
            this.charac = this.bookDetails.characters[0]
        }).catch(error => {
                console.log(error) 
        });
     },
     methods:{
        backToList(){
            router.push({name:'GotBooks'}) 
        }
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

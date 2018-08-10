<template>
  <div v-if="Object.keys(bookDetails).length>0">

      <button @click="backToList()" class="back">Back</button>
      <div class="spacer10"></div>
      <div class="spacer10"></div>

      <div class="details"><span>Book Name : </span>
      {{bookDetails.name}}</div>

      <div class="spacer10"></div>

      <div class="details"><span>Number Of Pages : </span>
      {{bookDetails.numberOfPages}}</div>

      <div class="spacer10"></div>

     <div class="details"> <span>Author : </span>
      {{bookDetails.authors[0]}}</div>
      <div class="spacer10"></div>
      <div class="details">
      <span>Characters : </span>
      <select v-model="charac" style="font-size: 12px;">
          <option>Select Characters</option>
          <option v-for="characters in bookDetails.characters" >{{characters}}</option>
      </select>
      <div class="spacer10"></div>
<!--      This is component to see the particular character      -->
      <character-details :charac=charac></character-details>
      </div>

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
      //API Call to fetch the book details
      getBookDetails(this.bookID).then(response => {
            this.bookDetails = response.data
            this.charac = this.bookDetails.characters[0]
        }).catch(error => {
                console.log(error) 
        });
     },
     methods:{
        //Navigate to Home Page 
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
        display: inline-block;
       font-size: 20px;
       font-weight: 800;
    }
    .spacer10{
        width:100%;
        height:10px;
        clear:both;
    }
    button.back{
        float: left;
        padding: 8px 20px;
        background: #6cd;
        color: #fff;
        cursor: pointer;
        border: 0;
        font-size: 14px;
        border-radius: 15px;
    }
    div.details{
      padding:12px;
      border-bottom: 3px solid #6cd;
      background:#f1f1f1;
    }

</style>

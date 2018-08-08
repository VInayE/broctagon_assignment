<template>
    <div v-if="Object.keys(charcDetails).length>0">
      <span>Character Details : </span><br>
      <span v-if="charcDetails.titles[0]">Title : {{charcDetails.titles[0]}}</span><br>
      <span v-if="charcDetails.name">Name : {{charcDetails.name}}</span><br>
      <span v-if="charcDetails.gender">Gender : {{charcDetails.gender}}</span><br>
    </div>      
</template>
<script>
   import router from '../router'
   import {charactersDetails} from '../api/api'
   export default {
     props:['charac'],
     components:{
     },
     watch:{
         charac(){
            this.getCharacters()
         }
     },
     data () {
       return {
           charcDetails:[]
       }  
     },
     created(){
         this.getCharacters()
     },
     methods:{
         getCharacters(){
            charactersDetails(this.charac).then(response => {
            this.charcDetails = response.data
            }).catch(error => {
            console.log(error) 
            });
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

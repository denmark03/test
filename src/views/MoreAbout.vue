<template>
    <div class="moreabout">
     <b><h1>CLICK HERE</h1></b>
     <div ><br>
     <h1> {{ more.info }} </h1><br>
     <h1> {{ id}} </h1>


     </div>
    </div>
  </template>
  <script>
  export default {
    data(){
      return{
        more:[]
      }
    },
    props:['id'],
    mounted() {
      fetch('http://localhost:3000/more/'+this.id)
        .then(res => res.json())
        .then(data => this.more = data)
        .catch(error => console.log(error.message))
    }
  } 
  </script>
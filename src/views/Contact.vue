<template>
    <div class="contact">
     <b><h1>This is My Personal Contact Information</h1></b>
     <div ><br>
     <h1> {{ contact.creator }} </h1><br>
     <h1> {{ contact.contact }} </h1><br>
     <h1>{{ contact.add }}</h1>

     </div>
    </div>
  </template>
  <script>
  export default {
    data(){
      return{
        contact:[]
      }
    },
    props:['id'],
    mounted() {
      fetch('http://localhost:3000/contact/'+ this.id)
        .then(res => res.json())
        .then(data => this.contact = data)
        .catch(error => console.log(error.message))
    }
  } 
  </script>
<style scoped>
  .contact {
    color: aliceblue;
  }



</style>



  
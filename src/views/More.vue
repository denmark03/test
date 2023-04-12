<template>
    <div class="more">
     <b><h1>More about this page</h1></b>
     </div>
     <div v-for="mor in more" :key="mor.id">

  <router-link :to="{name: 'Moreabout', params:{id:mor.id}}">
 <h1> {{ mor.SeeMore }}</h1>
  </router-link>
     </div>

  </template>
  <script>
        export default {
            data(){
                return{
                    more: []
                }
            },

            mounted(){
                fetch('http://localhost:3000/more')
                .then(res => res.json())
      .then(data => this.more = data)
      .catch(error => console.log(error.message))

            }


        }
  </script>

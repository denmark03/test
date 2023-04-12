<template>

  <div class="about" data-aos="zoom-out" data-aos-duration="1500" data-aos-delay="150">
    <h1>This is an about page</h1>
    <p>This is a dummy website that i created, this is only for Educational purposes. Feel free to explore
      i am still studying Vue3 + Vite and this is my first decent website ive done. </p>
     <b><p>Is AnimePahe reliable?</p></b> 
     <p>I used to download anime from 4anime.to. But in some episodes there were problems with the</p>
     <p>subtitles, so i thought i would try out animepahe.</p>
     <p>Anyone who has used and downloaded anime from the website, could you let me know if the</p>
     <p>subtitles are reliable. In some episodes of the animes i downloaded from 4anime, sometimes the</p>
     <p>subtitles will not show up or are out of sync. Are there any problems in animepahe as well?</p>
     <p>If there are, can someone let me know a reliable site which i can download anime, and if it</p>
     <p>doesnt have watermarks its a plus. i do know theres a whole list of sites in the subreddit, i did</p>
     <p>read that, but i dont know which sites are reliable and which arent</p>
    </div>

  
 
<div v-for="con in contact" :key="con.id">
  <button class="button-54" role="button">
  <router-link :to="{name: 'contact', params:{id:con.id}}">
 <h1> {{ con.PersonalInfo }}</h1>
  </router-link>

</button>
</div>

</template>
<script>
export default {
  data() {
    return {
      contact:null
    }
  },
  mounted() {
    fetch('http://localhost:3000/contact')
      .then(res => res.json())
      .then(data => this.contact = data)
      .catch(error => console.log(error.message))
  }
}
</script>
<style scoped>
  * {
    padding: 1px 1px;
    margin: 1rem;
    
  }

  .about {
  max-width: 960px;
  margin: 0 auto;
  padding: 1px 1px;
  border: 2px solid #000000;
  background-color: rgb(0, 166, 255);
  box-shadow: #000;
}

.about > div {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

  .button-54 {
  font-family: "Open Sans", sans-serif;
  font-size: 8px;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 1px solid;
  padding: 0.25px 0.5rem;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: 4px;
  width: 15rem;
  height: 50%;
}

.button-54:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}
.button-54:hover {
  background-color: #0fbfff;
  color: #1f6af7;
}


@media (min-width: 768px) {
  .button-54 {
    padding: 0.25em 0.75em;
  }
}



</style>
<script setup lang="ts">
  import { onMounted,onUnmounted,ref } from 'vue';
  import DraftLayout from './components/DraftLayout.vue';

  // const message = ref('Loading...');
  const searchString = ref("");
  let searchTimeout:number|null = null;

  function handleKeyPress(event:KeyboardEvent){

    const key = event.key;

    if(key.length == 1 && /^[a-zA-Z_]$/.test(key)){
      searchString.value += key;
    }
    else if(key == "Backspace"){
      searchString.value = searchString.value.slice(0,-1);
    }

    if(searchTimeout) clearTimeout(searchTimeout);
    searchTimeout = window.setTimeout(()=>{
      searchString.value="";
    },2500)

  }



  onMounted(async ()=>{
    window.addEventListener("keydown",handleKeyPress);
    // try{
    //   const res = await fetch(import.meta.env.VITE_BACKEND_URL);//trocar por variável
    //   const text = await res.text();
    //   message.value = text;
    // }
    // catch(error){
    //   message.value = 'Error connecting to the backend';
    //   console.error(error)
    // }
  })

  onUnmounted(() =>{
    window.removeEventListener("keydown",handleKeyPress);
  })
</script>

<template>
  <div>
    <!-- <h1>Nothing yet! In construction! 🏗️ </h1>
    <h2>{{ message }}</h2> -->
    <div v-if="searchString" class="search-overlay">{{ searchString.toUpperCase() }}</div>
    <DraftLayout :searchString="searchString"/>
  </div>

  <footer><a target="_blank" href="https://icons8.com/icon/35611/dota-2">Dota 2</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></footer>
  
</template>

<style scoped>

.search-overlay{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10rem;
  color: white;
  text-shadow: 2px 2px 4px black;
  z-index: 1000;
}

</style>

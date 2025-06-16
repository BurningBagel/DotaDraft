<script setup lang="ts">
  import { onMounted,onUnmounted,ref } from 'vue';
import DraftLayout from './DraftLayout.vue';

  const message = ref('Loading...');
  const searchText = ref("");
  let searchTimeout:number|null = null;

  function handleKeyPress(event:KeyboardEvent){

    const key = event.key;

    if(key.length == 1 && /^[a-zA-Z_]$/.test(key)){
      searchText.value += key;
    }
    else if(key == "Backspace"){
      searchText.value = searchText.value.slice(0,-1);
    }

    if(searchTimeout) clearTimeout(searchTimeout);
    searchTimeout = window.setTimeout(()=>{
      searchText.value="";
    },2500)

  }



  onMounted(async ()=>{
    window.addEventListener("keydown",handleKeyPress);
    try{
      const res = await fetch('http://localhost:3000');//trocar por variável
      const text = await res.text();
      message.value = text;
    }
    catch(error){
      message.value = 'Error connecting to the backend';
      console.error(error)
    }
  })

  onUnmounted(() =>{
    window.removeEventListener("keydown",handleKeyPress);
  })
</script>

<template>
  <div>
    <!-- <h1>Nothing yet! In construction! 🏗️ </h1>
    <h2>{{ message }}</h2> -->
    <div v-if="searchText" class="search-overlay">{{ searchText }}</div>
    <DraftLayout :searchText="searchText"/>
  </div>

  <footer><a target="_blank" href="https://icons8.com/icon/35611/dota-2">Dota 2</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></footer>
  
</template>

<style scoped>

.search-overlay{
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: white;
  text-shadow: 2px 2px 4px black;
  z-index: 1000;
}

</style>

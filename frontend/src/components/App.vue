<script setup lang="ts">
  import { onMounted,ref } from 'vue';
import DraftLayout from './DraftLayout.vue';

  const message = ref('Loading...');

  onMounted(async ()=>{
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
</script>

<template>
  <div>
    <!-- <h1>Nothing yet! In construction! 🏗️ </h1>
    <h2>{{ message }}</h2> -->
    <DraftLayout/>
  </div>

  <footer><a target="_blank" href="https://icons8.com/icon/35611/dota-2">Dota 2</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></footer>
  
</template>

<style scoped>

</style>

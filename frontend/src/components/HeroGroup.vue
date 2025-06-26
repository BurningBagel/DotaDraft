<template>
  <div class="hero-group">
    <h4>{{ title }}</h4>
    <div class="grid">
      <div
        v-for="hero in heroes"
        :key="hero.names[0]"
        class="hero-tile"
        :class="{ 'hidden': !loaded[hero.names[0]], 'dimmed': searchString && !hero.names.some((name) => name.toLowerCase().includes(searchString.toLowerCase())) }"
        @click.left="() => OnSelect('radiant', hero)"
        @click.right.prevent="() => OnSelect('dire', hero)"
      >
        <p v-if="!loaded[hero.names[0]]" class="placeholder"></p>
        <img :src="`/images/heroes/${hero.names[0]}_icon.webp`" :alt="`${hero.names[0]}`" @load="loaded[hero.names[0]] = true"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
const loaded = reactive({});

defineProps({
  title: String,
  heroes: Array,
  OnSelect: Function,
  searchString: String
});
</script>

<style scoped>

.placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #eeeeee8f 25%,
    #dddddd7f 50%,
    #eeeeee76 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.2s infinite;
  border-radius: 4px;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}


.hero-tile.hidden img{
  display: none;
}

.hero-tile.dimmed{
  opacity: 0.3;
  filter: grayscale(1);
  transition: opacity 0.3s, filter 0.3s;
}
.hero-group {
  padding: 0.5rem;
}
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.hero-tile {
  width: 60px;
  text-align: center;
  cursor: pointer;
  position: relative;
}
.hero-tile img {
  width: 100%;
  display:block;
}
</style>

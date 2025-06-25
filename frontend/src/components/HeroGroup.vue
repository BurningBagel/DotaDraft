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
        <p v-if="!loaded[hero.names[0]]">🌀</p>
        <img v-else :src="`/images/heroes/${hero.names[0]}_icon.webp`" :alt="`${hero.names[0]}`" @load="loaded[hero.names[0]] = true"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const loaded = reactive({});

defineProps({
  title: String,
  heroes: Array,
  OnSelect: Function,
  searchString: String
});
</script>

<style scoped>
.hero-tile.hidden{
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
}
.hero-tile img {
  width: 100%;
}
</style>

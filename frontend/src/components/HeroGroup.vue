<template>
  <div class="hero-group">
    <h4>{{ title }}</h4>
    <div class="grid">
      <div
        v-for="hero in heroes"
        :key="hero.name"
        class="hero-tile"
        :class="{ 'dimmed': searchText && !hero.name.toLowerCase().includes(searchText.toLowerCase()) }"
        @click.left="() => OnSelect('radiant', hero)"
        @click.right.prevent="() => OnSelect('dire', hero)"
      >
        <img :src="`/images/heroes/${hero.name}_icon.webp`" :alt="`${hero.name}`" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  heroes: Array,
  OnSelect: Function,
  searchString: String
});
</script>

<style scoped>
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

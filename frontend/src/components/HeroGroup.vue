<template>
  <div class="hero-group">
    <h4>{{ title }}</h4>
    <div class="grid">
      <div
        v-for="hero in heroes"
        :key="hero.name"
        class="hero-tile"
        @click.left="() => onSelect('radiant', hero)"
        @click.right.prevent="() => onSelect('dire', hero)"
      >
        <img :src="`/images/heroes/${hero.name.toLowerCase()}.webp`" :alt="`${hero.name}`" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  heroes: Array,
  onSelect: Function,
});
</script>

<style scoped>
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

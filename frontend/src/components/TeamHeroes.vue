<template>
    <div :class="chosenTeam">
        <div
            v-for="hero in team"
            :key="hero.names[0]"
            class="hero-tile"
            @click.left="()=>OnSelect(chosenTeam,hero)"
        >
            <img :src="`/images/heroes/${hero.names[0]}_icon.webp`" :alt="`${hero.names[0]}`"/>

        </div>
    </div>
</template>

<script setup>
defineProps({
    team: Array,
    chosenTeam: String,
    OnSelect: Function
})
</script>

<style scoped>

.team-heroes {
    display: flex;
    flex-direction: row-reverse;
    gap: 2px;
}

.radiant{
    display: flex;
    flex-direction: row-reverse;
    gap: 2px
}

.dire{
    display: flex;
    flex-direction: row;
    gap: 2px;
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
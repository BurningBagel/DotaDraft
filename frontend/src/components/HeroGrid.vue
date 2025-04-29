<template>
    <div
    v-for="hero in strengthHeroes"
    :key="hero.name"
    class="hero-tile"
    @click.left="addToTeam('radiant',hero)"
    @click.right.prevent="addToTeam('dire',hero)"
    >
    <img src="`\assets\heroes\${hero.name}`" alt="hero.name">
    </div>
</template>

<script>

import { Team } from '../shared/enums/team.enum';



</script>
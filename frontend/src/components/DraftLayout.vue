<template>
  <div class="container">
    <div class="RADIANT">RADIANT</div>
    <div class="DIRE">DIRE</div>
    <div class="SELECT-DIRE">SELECT DIRE</div>
    <div class="SELECT-RADIANT">SELECT RADIANT</div>
    <div class="STR">
      <HeroGroup :title="'Strength'" :heroes="strHeroes" :onSelect="addHero" />
      STR
    </div>
    <div class="UNI"></div>
    <div class="INT"></div>
    <div class="AGI">
        AGI
      <HeroGroup :title="'Agility'" :heroes="agiHeroes" :onSelect="addHero" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { testHeroes } from "../../data/testHeroes.ts";
import { computed } from "vue";
import HeroGroup from "./HeroGroup.vue";
import { Attribute } from "../shared/enums/attribute.enum";
import type { Hero } from "../shared/models/hero.model.ts";
import { ref } from "vue";

const radiant = ref<Hero[]>([]);
const dire = ref<Hero[]>([]);

const addHero = (team: String, hero: Hero) => {
  const chosenTeam = team === "radiant" ? radiant.value : dire.value;

  if (!chosenTeam.includes(hero)) chosenTeam.push(hero);
};

const strHeroes = computed(() => //computed because JSON
  testHeroes.filter((h) => h.attribute == Attribute.Strength)
);

const agiHeroes = computed(() => 
    testHeroes.filter((h) => h.attribute == Attribute.Agility)
);
</script>

<style lang="css" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.25fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "RADIANT RADIANT RADIANT RADIANT RADIANT SELECT-RADIANT SELECT-RADIANT SELECT-DIRE SELECT-DIRE DIRE DIRE DIRE DIRE DIRE"
    ". STR STR . AGI AGI . . INT INT . UNI UNI ."
    ". STR STR . AGI AGI . . INT INT . UNI UNI .";
}

.RADIANT {
  grid-area: RADIANT;
}

.DIRE {
  grid-area: DIRE;
}

.SELECT-DIRE {
  grid-area: SELECT-DIRE;
}

.SELECT-RADIANT {
  grid-area: SELECT-RADIANT;
}

.STR {
  grid-area: STR;
}

.UNI {
  grid-area: UNI;
}

.INT {
  grid-area: INT;
}

.AGI {
  grid-area: AGI;
}
</style>

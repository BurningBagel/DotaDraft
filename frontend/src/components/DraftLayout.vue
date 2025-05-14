<template>
  <div class="container">
    <div class="RADIANT">
      <TeamHeroes :team="radiant" :chosenTeam="'radiant'"/>
    </div>
    <div class="DIRE">
      <TeamHeroes :team="dire" :chosenTeam="'dire'"/>
    </div>
    <div class="SELECT-DIRE">SELECT DIRE</div>
    <div class="SELECT-RADIANT">SELECT RADIANT</div>
    <div class="STR">
      <HeroGroup :title="'Strength'" :heroes="strHeroes" :onSelect="addHero" />
    </div>
    <div class="AGI">
      <HeroGroup :title="'Agility'" :heroes="agiHeroes" :onSelect="addHero" />
    </div>
    
    <div class="INFO">
      <h3>Welcome to the Dota Draft Assistant!</h3>
      
      <ul>
        <li>Select your Team choosing one of the buttons above</li>
        <li>Use Left Click to add a Hero to the Radiant or Right Click to add to the Dire</li>
        <li>Click again on any hero to remove them from that team</li>
        <li>Below here you'll see recommendations on heroes you might want to pick based on your enemies strengths, as well as items you'll want to consider picking up!</li>
      </ul>
        
    </div>
    
    <div class="INT">
      <HeroGroup :title="'Intelligence'" :heroes="intHeroes" :onSelect="addHero" />
    </div>
    <div class="UNI">
      <HeroGroup :title="'Universal'" :heroes="uniHeroes" :onSelect="addHero" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { testHeroes } from "../data/testHeroes.ts";
import { computed } from "vue";
import HeroGroup from "./HeroGroup.vue";
import { Attribute } from "../shared/enums/attribute.enum";
import type { Hero } from "../shared/models/hero.model.ts";
import { ref } from "vue";
import TeamHeroes from "./TeamHeroes.vue";

const radiant = ref<Hero[]>([]);
const dire = ref<Hero[]>([]);

const addHero = (team: String, hero: Hero) => {
  const chosenTeam = team === "radiant" ? radiant.value : dire.value;
  const otherTeam = team === "radiant" ? dire.value : radiant.value;
  
  if (!chosenTeam.includes(hero) && chosenTeam.length <= 5){
    chosenTeam.push(hero);
  }
  else{
    chosenTeam.splice(chosenTeam.findIndex((item) => {return item.name == hero.name}),1)
  }

  if(otherTeam.includes(hero)){
    otherTeam.splice(otherTeam.findIndex((item) => {return item.name == hero.name}),1)
  }
};

const strHeroes = computed(() =>
  //computed because JSON
  testHeroes.filter((h) => h.attribute == Attribute.Strength)
);

const agiHeroes = computed(() =>
  testHeroes.filter((h) => h.attribute == Attribute.Agility)
);

const intHeroes = computed(() =>
  testHeroes.filter((h) => h.attribute == Attribute.Intelligence)
);

const uniHeroes = computed(() =>
  testHeroes.filter((h) => h.attribute == Attribute.Universal)
);


</script>

<style lang="css" scoped>
.container {
  display: grid;
  border: 1px solid purple;
  width: 100vw;
  height: 100vh;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.25fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 0;
  grid-auto-flow: row;
  grid-template-areas:
    "RADIANT RADIANT RADIANT RADIANT RADIANT SELECT-RADIANT SELECT-RADIANT SELECT-DIRE SELECT-DIRE DIRE DIRE DIRE DIRE DIRE"
    ". STR STR . AGI AGI INFO INFO INT INT . UNI UNI ."
    ". STR STR . AGI AGI INFO INFO INT INT . UNI UNI .";
}

ul{
  padding-left: 0.5rem;
}


.INFO{
  grid-area: INFO;
  text-align: center;
}


.RADIANT {
  grid-area: RADIANT;
  border: 1px solid green;
}

.DIRE {
  grid-area: DIRE;
  border: 1px solid red;
}

.SELECT-DIRE {
  grid-area: SELECT-DIRE;
  border: 1px solid yellow;
}

.SELECT-RADIANT {
  grid-area: SELECT-RADIANT;
  border: 1px solid orange;
}

.STR {
  grid-area: STR;
  border: 1px solid red;
}

.UNI {
  grid-area: UNI;
  border: 1px solid orange;
}

.INT {
  grid-area: INT;
}

.AGI {
  grid-area: AGI;
  border: 1px solid green;
}
</style>

<template>
  <div class="container">
    <div class="RADIANT">
      <TeamHeroes :team="radiant" :chosenTeam="'radiant'" />
    </div>
    <div class="DIRE">
      <TeamHeroes :team="dire" :chosenTeam="'dire'" />
    </div>

    <div class="SELECT-DIRE" v-if="!selectedTeam">
      <TeamButton :teamName="'dire'" :TeamSelect="TeamSelect" />
    </div>
    <div class="SELECT-RADIANT" v-if="!selectedTeam">
      <TeamButton :teamName="'radiant'" :TeamSelect="TeamSelect" />
    </div>


    <button @click="ResetDraft" v-if="selectedTeam" class="RESET">Reset</button>

    <div class="STR">
      <HeroGroup :title="'Strength'" :heroes="strHeroes" :OnSelect="AddHero" />
    </div>
    <div class="AGI">
      <HeroGroup :title="'Agility'" :heroes="agiHeroes" :OnSelect="AddHero" />
    </div>

    <div class="INFO">
      <h3>Welcome to the Dota Draft Assistant!</h3>

      <ul>
        <li>Select your Team choosing one of the buttons above</li>
        <li>Use Left Click to add a Hero to the Radiant or Right Click to add to the Dire</li>
        <li>Click again on any hero to remove them from that team</li>
        <li>Below here you'll see recommendations on heroes you might want to pick based on your enemies strengths, as
          well as items you'll want to consider picking up!</li>
      </ul>

    </div>

    <div class="INT">
      <HeroGroup :title="'Intelligence'" :heroes="intHeroes" :OnSelect="AddHero" />
    </div>
    <div class="UNI">
      <HeroGroup :title="'Universal'" :heroes="uniHeroes" :OnSelect="AddHero" />
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
import TeamButton from "./TeamButton.vue";
import type { Team } from "../shared/enums/team.enum.ts";

const radiant = ref<Hero[]>([]);
const dire = ref<Hero[]>([]);

const selectedTeam = ref<Team | null>(null);

//const heroes = ; //TODO need to bring heroes in from the backend

const TeamSelect = (team: Team) => {
  selectedTeam.value = team;
}

const ResetDraft = () => {
  selectedTeam.value = null;
  radiant.value = [];
  dire.value = [];
}

const AddHero = (team: String, hero: Hero) => {
  const chosenTeam = team === "radiant" ? radiant.value : dire.value;
  const otherTeam = team === "radiant" ? dire.value : radiant.value;

  if (!chosenTeam.includes(hero) && chosenTeam.length < 5) {
    chosenTeam.push(hero);
  }
  else if(chosenTeam.includes(hero)){ //if the hero is already present in the team, remove them
    chosenTeam.splice(chosenTeam.findIndex((item) => { return item.name == hero.name }), 1)
  }

  if (otherTeam.includes(hero)) {
    otherTeam.splice(otherTeam.findIndex((item) => { return item.name == hero.name }), 1)
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
    ". STR STR AGI AGI . INFO INFO . INT INT UNI UNI ."
    ". STR STR AGI AGI . INFO INFO . INT INT UNI UNI .";
}

ul {
  padding-left: 0.5rem;
}


.INFO {
  grid-area: INFO;
  text-align: center;
}

.RESET{
  grid-area: SELECT-RADIANT / SELECT-RADIANT / SELECT-DIRE / SELECT-DIRE;
  align-items: center;
  border: 1px solid yellow;
  display: flex;
  justify-content: center;
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

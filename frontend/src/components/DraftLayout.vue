<template>
  <div class="container">
    <div class="RADIANT">
      <TeamHeroes :team="radiant" :chosenTeam="'radiant'" :OnSelect="RemoveHero"/>
    </div>
    <div class="DIRE">
      <TeamHeroes :team="dire" :chosenTeam="'dire'" :OnSelect="RemoveHero"/>
    </div>

    <div class="SELECT-DIRE" v-if="!selectedTeamName">
      <TeamButton :teamName="'dire'" :TeamSelect="TeamSelect" />
    </div>
    <div class="SELECT-RADIANT" v-if="!selectedTeamName">
      <TeamButton :teamName="'radiant'" :TeamSelect="TeamSelect" />
    </div>

    <button @click="ResetDraft" v-if="selectedTeamName" class="RESET">Reset</button>

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
        <li>Here you'll see recommendations on heroes you might want to pick based on your enemies strengths, as
          well as items you'll want to consider picking up once the draft's complete!</li>
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
import { Team } from "../shared/enums/team.enum.ts";

const radiant = ref<Hero[]>([]);
const dire = ref<Hero[]>([]);

const selectedTeamName = ref<Team | null>(null);

// TODO filter heroes in main screen like in the game

//const heroes = ; //TODO need to bring heroes in from the backend

// TODO start doing the logic of the hero recommendation
  /*
  recommendation logic:
    for all heroes in chosenTeam
      add all unique strengths to a list of teamStrengths, count amount of each
      add all unique weaknesses to a list of teamWeaknesses, count amount of each
    for all heroes in enemyTeam
      add all unique weaknesses to a list of enemyWeaknesses, count amount of each
      add all unique strengths to a list of enemyStrengths, count amount of each

    sort all team and enemy strengths and weaknesses by count

    for weaknesses in enemyWeaknesses:
      if already in teamStrengths, move on
      else for all heroes, add unique heroes to list of recommendations that aren't already there and who's weaknesses don't match the enemyStrengths

  */

const TeamSelect = (team: Team) => {
  selectedTeamName.value = team;
}

const ResetDraft = () => {
  selectedTeamName.value = null;
  radiant.value = [];
  dire.value = [];
}

function countStrengthsWeaknesses(strengthsArray:Array<{strength:string,count:number}>,weaknessesArray:Array<{weakness:string,count:number}>,teamMembers:Array<Hero>){
  
  let countMapStrength = new Map<string,number>(); //Maps are like sets, every key is unique. New one added w/ same key -> overwrite
  let countMapWeakness = new Map<string,number>();

  teamMembers.forEach(hero => { 
    hero.strengths.forEach(strength => {
      countMapStrength.set(strength,(countMapStrength.get(strength) || 0) + 1); //adds to map, overwrites count each time
    });
    hero.weaknesses.forEach(weakness => {
      countMapWeakness.set(weakness,(countMapWeakness.get(weakness) || 0) + 1);
    });
  });

  countMapStrength.forEach((count,strength) => {
    strengthsArray.push({strength,count})
  })
  countMapWeakness.forEach((count,weakness) => {
    weaknessesArray.push({weakness,count})
  })
}

function HeroRecommendations(){
  const [selectedTeam,enemyTeam] = selectedTeamName.value == Team.Radiant ? [radiant,dire] : [dire,radiant]; // TODO defaults to dire,radiant if selectedTeam is null. Need to treat null value 
  var teamStrengths:{strength:string,count:number}[] = [];
  var teamWeaknesses:{weakness:string,count:number}[] = [];
  var enemyStrengths:{strength:string,count:number}[] = [];
  var enemyWeaknesses:{weakness:string,count:number}[] = [];

  var recommendations:string[] = [];
  
  countStrengthsWeaknesses(teamStrengths,teamWeaknesses,selectedTeam.value); //TODO need to check if passing the pointer's value will work or if need to pass the pointer
  countStrengthsWeaknesses(enemyStrengths,enemyWeaknesses,enemyTeam.value);


// now how to do recommendations?
  enemyWeaknesses.forEach((anchor) => {
    if(!teamStrengths.some((item) => {item.strength === anchor.weakness})){
      //add all heroes with this weakness as a strength to recommendations, along with the count.
    }
  })

}

const RemoveHero = (team: String, hero: Hero) => {
  const chosenTeam = team === "radiant" ? radiant.value : dire.value;

  chosenTeam.splice(chosenTeam.findIndex((item)=>{return item.name == hero.name}),1)
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

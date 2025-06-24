<template>
  <div v-if="showError" id="showTeamError" class="team-error">
    Pick your team first!
  </div>
  <div class="container">
    <div class="RADIANT">
      <TeamHeroes
        :team="radiant"
        :chosenTeam="'radiant'"
        :OnSelect="RemoveHero"
      />
    </div>
    <div class="DIRE">
      <TeamHeroes :team="dire" :chosenTeam="'dire'" :OnSelect="RemoveHero" />
    </div>

    <div class="SELECT-DIRE" v-if="!selectedTeamName">
      <TeamButton :teamName="Team.Dire" :TeamSelect="TeamSelect" />
    </div>
    <div class="SELECT-RADIANT" v-if="!selectedTeamName">
      <TeamButton :teamName="Team.Radiant" :TeamSelect="TeamSelect" />
    </div>

    <button @click="ResetDraft" v-if="selectedTeamName" class="RESET">
      Reset
    </button>

    <div class="STR">
      <HeroGroup
        :title="'Strength'"
        :heroes="strHeroes"
        :OnSelect="AddHero"
        :searchString="searchString"
      />
    </div>
    <div class="AGI">
      <HeroGroup
        :title="'Agility'"
        :heroes="agiHeroes"
        :OnSelect="AddHero"
        :searchString="searchString"
      />
    </div>

    <div class="INFO" v-if="radiant.length == 0 || dire.length == 0">
      <h3>Welcome to the Dota Draft Assistant!</h3>

      <ul>
        <li>Select your Team choosing one of the buttons above</li>
        <li>
          Use Left Click to add a Hero to the Radiant or Right Click to add to
          the Dire
        </li>
        <li>Click again on any hero to remove them from that team</li>
        <li>
          Here you'll see recommendations on heroes you might want to pick based
          on your enemies strengths, as well as items you'll want to consider
          picking up once the draft's complete!
        </li>
      </ul>
    </div>
    <div class="INFO" v-if="radiant.length > 0 && dire.length > 0 && radiant.length + dire.length < 10">
      <div
        class="recommendation"
        v-for="rec in recommendations"
        :key="rec.name"
      >
        <img
          class="hero-tile"
          :src="`/images/heroes/${rec.name}_icon.webp`"
          :alt="`${rec.name}`"
          style="pointer-events: none;"
        />
        <div class="stars">
          <span v-for="i in rec.score" :key="i">⭐</span>
        </div>
      </div>
    </div>
    <div class="INFO" v-if="radiant.length + dire.length == 10 && leftoverWeaknesses?.size > 0">
      <h3>Here are the enemy weaknesses you haven't addressed in your draft. Try to build items to cover for these!</h3>
      <div class="leftover"
      v-for="leftover in leftoverWeaknesses">
        {{ leftover.toLowerCase().replace("_"," ") }}
      </div>
    </div>

    <div class="INFO" v-if="radiant.length + dire.length == 10 && leftoverWeaknesses.size == 0">
      <h3>Great draft! GLHF!</h3>
    </div>

    <div class="INT">
      <HeroGroup
        :title="'Intelligence'"
        :heroes="intHeroes"
        :OnSelect="AddHero"
        :searchString="searchString"
      />
    </div>
    <div class="UNI">
      <HeroGroup
        :title="'Universal'"
        :heroes="uniHeroes"
        :OnSelect="AddHero"
        :searchString="searchString"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// import { testHeroes } from "../data/testHeroes.ts"; // TODO replace with import from backend
import { computed, onMounted } from "vue";
import HeroGroup from "./HeroGroup.vue";
import { Attribute } from "../shared/enums/attribute.enum";
import type { Hero } from "../shared/models/hero.model.ts";
import { ref } from "vue";
import TeamHeroes from "./TeamHeroes.vue";
import TeamButton from "./TeamButton.vue";
import { Team } from "../shared/enums/team.enum.ts";

defineProps({
  searchString: String,
});

const radiant = ref<Hero[]>([]);
const dire = ref<Hero[]>([]);

const selectedTeamName = ref<Team | null>(null);

const showError = ref(false);

const heroes = ref<Hero[]>([]);

const leftoverWeaknesses = ref<Set<String>>(new Set());

var recommendations = ref<
  { name: string; weaknesses: string[]; score: number }[]
>([]);

onMounted(async () =>{
  const res = await fetch(import.meta.env.VITE_BACKEND_URL+'/heroes');
  heroes.value = await res.json();
})


//const heroes = ; //TODO need to bring heroes in from the backend

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
  // console.log(selectedTeamName.value);
};

const ResetDraft = () => {
  selectedTeamName.value = null;
  radiant.value = [];
  dire.value = [];
};

function countStrengthsWeaknesses(
  strengthsArray: Array<{ strength: string; count: number }>,
  weaknessesArray: Array<{ weakness: string; count: number }>,
  teamMembers: Array<Hero>
) {
  var countMapStrength = new Map<string, number>(); //Maps are like sets, every key is unique. New one added w/ same key -> overwrite
  var countMapWeakness = new Map<string, number>();

  // console.log("inside function");
  // console.log(strengthsArray,weaknessesArray,teamMembers);

  teamMembers.forEach((hero) => {
    hero.strengths.forEach((strength) => {
      countMapStrength.set(strength, (countMapStrength.get(strength) || 0) + 1); //adds to map, overwrites count each time
    });
    hero.weaknesses.forEach((weakness) => {
      countMapWeakness.set(weakness, (countMapWeakness.get(weakness) || 0) + 1);
    });
  });

  countMapStrength.forEach((count, strength) => {
    strengthsArray.push({ strength, count });
  });
  countMapWeakness.forEach((count, weakness) => {
    weaknessesArray.push({ weakness, count });
  });
}

function UpdateHeroRecommendations() {
  var selectedTeam: Hero[] = [];
  var enemyTeam: Hero[] = [];
  var teamStrengths: { strength: string; count: number }[] = [];
  var teamWeaknesses: { weakness: string; count: number }[] = [];
  var enemyStrengths: { strength: string; count: number }[] = [];
  var enemyWeaknesses: { weakness: string; count: number }[] = [];
  var i: number;

  recommendations.value.splice(0); //clear current recs and leftovers
  leftoverWeaknesses.value?.clear();

  // console.log("CLEARING RECOMMENDATIONS");
  // console.log([...recommendations.value]);

  if (selectedTeamName.value == Team.Radiant) {
    selectedTeam = radiant.value;
    enemyTeam = dire.value;
  } else if (selectedTeamName.value == Team.Dire) {
    selectedTeam = dire.value;
    enemyTeam = radiant.value;
  } else {
    throw new Error(`Unknown team name: ${selectedTeamName.value}`);
  }

  //TODO teamWeaknesses isn't being used for anything. Maybe change this function?
  countStrengthsWeaknesses(teamStrengths, teamWeaknesses, selectedTeam);
  countStrengthsWeaknesses(enemyStrengths, enemyWeaknesses, enemyTeam);

  // console.log("team strengths",teamStrengths);
  // console.log("team weaknesses",teamWeaknesses);
  // console.log("enemy strengths",enemyStrengths);
  // console.log("enemy weaknesses",enemyWeaknesses);

  //V1 of recommendations. Just adds all unique heroes with useful strengths that haven't already been selected. Mostly just for testing DONE
  //V2 should take into account number of times each Weakness appears and reflect that in recommendation list DONE
  //V3 should also take into account enemy strengths and avoid heroes with weaknesses that would be caught by them DONE
  enemyWeaknesses.forEach((enemyTrait) => {
    if (//for each enemy weakness, if there are no team strengths that address it...
      !teamStrengths.some(
        (teamTrait) => teamTrait.strength === enemyTrait.weakness
      )
    ) {
      leftoverWeaknesses.value?.add(enemyTrait.weakness);
      heroes.value.forEach((hero) => {
        //For every hero, if it includes the enemy's weakness in it's strengths, AND recommendations does not already include it AND the selected team does not already have them, add that heros name to rec
        if (
          hero.strengths.includes(enemyTrait.weakness) &&
          !selectedTeam.includes(hero)
        ) {
          i = recommendations.value.findIndex(
            (anchor) => anchor.name === hero.name
          );
          if (i == -1) {
            recommendations.value.push({
              name: hero.name,
              weaknesses: hero.weaknesses,
              score: enemyTrait.count,
            });
            // console.log(
            //   `pushing hero ${hero.name} with a score of ${enemyTrait.count}`
            // );
            // console.log(recommendations.value);
          } else {
            // console.log(`found another one! ${recommendations.value[i].name} ${recommendations.value[i].score} ${hero.name}`);//I suppose a hero can be added more than once if it can cover more than 1 weakness
            recommendations.value[i].score += enemyTrait.count;
            // console.log(
            //   `after update, hero ${recommendations.value[i].name} has a score of ${recommendations.value[i].score}`
            // );
            // console.log(recommendations.value);
          }
        }
      });
    }
  });

  //implementing v3. Reduce the scores of all heroes in recommendations for each enemy strength that matches one of their weaknesses

  recommendations.value.forEach((rec) => {
    rec.weaknesses.forEach((weakness) => {
      i = enemyStrengths.findIndex((anchor) => anchor.strength === weakness);
      if (i != -1) {
        rec.score -= enemyStrengths[i].count;
      }
    });
  });

  // console.log(recommendations.value);

  recommendations.value.sort((b, a) => a.score - b.score);

  // console.log(recommendations.value);

  recommendations.value.splice(
    0,
    recommendations.value.length,
    ...recommendations.value.filter((rec) => rec.score > -1)
  );

  // console.log(recommendations.value.length);

  if (recommendations.value.length > 15) recommendations.value.splice(15);

  // recommendations.value.map((rec) => {rec.name = rec.name.replace('_',' ')}); //replaces all the underscores with spaces.
}

const RemoveHero = (team: String, hero: Hero) => {
  const chosenTeam = team === "radiant" ? radiant.value : dire.value;

  chosenTeam.splice(
    chosenTeam.findIndex((item) => {
      return item.name == hero.name;
    }),
    1
  );

  if (
    radiant.value.length > 0 &&
    dire.value.length > 0 &&
    selectedTeamName.value
  )
    UpdateHeroRecommendations();
};

const AddHero = (team: String, hero: Hero) => {
  const chosenTeam = team === "radiant" ? radiant.value : dire.value;
  const otherTeam = team === "radiant" ? dire.value : radiant.value;

  //if we haven't selected a team yet, need to give a message to the user!
  if (!selectedTeamName.value) {
    showError.value = true;

    const audio = new Audio("sounds/meep_merp.mp3");
    audio.play();

    setTimeout(() => {
      showError.value = false;
    }, 2500);
    return;
  }

  if (!chosenTeam.includes(hero) && chosenTeam.length < 5) {
    chosenTeam.push(hero);
  } else if (chosenTeam.includes(hero)) {
    //if the hero is already present in the team, remove them
    chosenTeam.splice(
      chosenTeam.findIndex((item) => {
        return item.name == hero.name;
      }),
      1
    );
  }

  if (otherTeam.includes(hero)) {
    otherTeam.splice(
      otherTeam.findIndex((item) => {
        return item.name == hero.name;
      }),
      1
    );
  }
  if (chosenTeam.length > 0 && otherTeam.length > 0 && selectedTeamName.value)
    UpdateHeroRecommendations();
  // console.log(recommendations.value.length);
};

const strHeroes = computed(() =>
  //computed because JSON
  heroes.value.filter((h) => h.attribute == Attribute.Strength)
);

const agiHeroes = computed(() =>
  heroes.value.filter((h) => h.attribute == Attribute.Agility)
);

const intHeroes = computed(() =>
  heroes.value.filter((h) => h.attribute == Attribute.Intelligence)
);

const uniHeroes = computed(() =>
  heroes.value.filter((h) => h.attribute == Attribute.Universal)
);
</script>

<style lang="css" scoped>
.container {
  display: grid;
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

.leftover{
  text-transform: capitalize;
}

.team-error {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(200, 0, 0, 0.9);
  padding: 1rem 2rem;
  border-radius: 8px;
  color: white;
  font-size: 1.5rem;
  z-index: 1000;
  animation: pulse 0.4s ease-in-out infinite alternate;
}

@keyframes pulse {
  from {
    transform: translateX(-50%) scale(1);
  }
  to {
    transform: translateX(-50%) scale(1.05);
  }
}

.recommendation {
  margin-left: 4rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.hero-tile {
  width: 60px;
  text-align: center;
  cursor: pointer;
}
.hero-tile img {
  width: 100%;
}

ul {
  padding-left: 0.5rem;
}

.INFO {
  grid-area: INFO;
  text-align: center;
}

.TEST {
  border: 1px white solid;
}

.RESET {
  grid-area: SELECT-RADIANT / SELECT-RADIANT / SELECT-DIRE / SELECT-DIRE;
  align-items: center;
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

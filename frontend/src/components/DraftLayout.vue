<template>
    <div class="container">
        <div class="RADIANT"></div>
        <div class="DIRE"></div>
        <div class="SELECT-DIRE"></div>
        <div class="SELECT-RADIANT"></div>
        <div class="STR"></div>
        <div class="UNI"></div>
        <div class="INT"></div>
        <div class="AGI"></div>
    </div>
</template>

<style lang="css" scoped>
.container {  display: grid;
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

.RADIANT { grid-area: RADIANT; }

.DIRE { grid-area: DIRE; }

.SELECT-DIRE { grid-area: SELECT-DIRE; }

.SELECT-RADIANT { grid-area: SELECT-RADIANT; }

.STR { grid-area: STR; }

.UNI { grid-area: UNI; }

.INT { grid-area: INT; }

.AGI { grid-area: AGI; }


</style>
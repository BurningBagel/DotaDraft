<template>
    <button :class="[teamName,'base']" :onclick="() => TeamSelect(teamName)">
        {{ teamName }}
    </button>
</template>

<script setup>
defineProps({
    teamName: String,
    TeamSelect: Function
});
</script>

<style scoped>

.base{
    width: 100%;
    color: white;
    text-transform: capitalize;
    font-weight: bold;

}

.Radiant{
    background-color: green;
}

.Dire{
    background-color: red;
}

</style>
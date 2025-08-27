<template>
    <div v-show="showDiv">
        나는 사라질 수 있어요.
    </div>
</template>

<script setup>
import { ref } from 'vue';


const showDiv = ref(true)
</script>

<style scoped>

</style>
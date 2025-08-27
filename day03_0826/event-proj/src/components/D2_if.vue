<template>
    <p v-if="cnt > 3">재고 있음: {{ cnt }}</p>
    <p v-else-if="cnt > 0">재고 조금 남음: {{ cnt }}</p>
    <p v-else-if="cnt == 0">재고 없음: {{ cnt }}</p>
    <p v-else>선불 및 예약 재고 : {{ cnt }}</p>
</template>

<script setup>
import { ref } from 'vue';


const cnt = ref(6)
</script>

<style scoped>

</style>
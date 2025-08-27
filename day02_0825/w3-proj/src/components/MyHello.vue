<script setup>
import { ref } from 'vue';



const msg = ref("msg")
</script>

<template>
    <p>test</p>
    <div> {{ msg }}</div>
</template>


<style>
    p{
        background-color: aquamarine;
    }

    div {
        border: 3px solid sandybrown;
    }
</style>
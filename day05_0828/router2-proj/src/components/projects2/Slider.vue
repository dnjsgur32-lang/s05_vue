<template>
    <div class="km-slider" role="region" aria-label="메인 슬라이더">
        <div class="km-track" :style="{ transform: `translateX(-${current * 100}%)` }">
            <div class="km-slide g1">
                <div class="km-hero"><h2>김치의 품격</h2><p>발효의 깊이를 경험하세요</p></div>
            </div>
            <div class="km-slide g2">
                <div class="km-hero"><h2>수제 체험</h2><p>양념부터 버무림까지 직접</p></div>
            </div>
            <div class="km-slide g3">
                <div class="km-hero"><h2>지역의 맛</h2><p>다양한 김치의 세계</p></div>
            </div>
        </div>

        <div class="km-dots" role="tablist">
            <button v-for="i in 3" :key="i" class="km-dot" :class="{active: current===i-1}" @click="getIcon(i-1)"></button>
        </div>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';


const current = ref(0)
let t = null
const start = () => { stop(); t = setInterval(() => current.value=(current.value+1)%3, 3000) }
const stop = () => { if (t) clearInterval(t); t=null }
const go = i => { current.value=i; start() }
onMounted(start); onBeforeUnmount(stop)
</script>

<style scoped>

</style>
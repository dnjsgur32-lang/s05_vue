<template>
    <div>
        <button @click="gotoPage('a1')">A1 웹디자인기능사</button>
        <button @click="gotoPage('b2')">B2 웹디자인기능사</button>
        <!-- User {{ r_id }} -->
         <sub>
            <RouterView />
         </sub>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const $router = useRouter()

const gotoPage = (id) => {
    $router.push({ path: `/wd/${id}`})
}
</script>

<style lang="scss" scoped>

</style>
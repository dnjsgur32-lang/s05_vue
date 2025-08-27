<template>
    <div class="temp-bg">
    <button @click="cnt++">++1 증가버튼{{ cnt }}</button>
    <hr>
    <!-- 전구 -->
    <img :src="lightOn ? pic_bulbon : pic_bulboff" alt="pic_buloff">
    <button @click="lightOn = !lightOn">ON/OFF 버튼{{ lightOn }}</button>
    <hr>
    <!-- 키입력 -->
     <div>
        <input type="text" @input="inpCount++">
        <p>{{ inpCount }}번째 키를 다운 DOWN 하고 있습니다.</p>
     </div>
     <hr>
     <!-- 색상값 -->
    <div class="bg" @mousemove="colorVal = Math.floor(Math.random()* 360)"
    :style="{ backgroundColor: `hs1(${colorVal}, 60%, 60%)` }">
     {{ colorVal }}
</div>
    <!-- 메뉴 -->
    <div class="menu">
        <ol>
            <li v-for="food in foods_assets"
                @click="imgUrl = food.src">
                {{ food.name }}
                </li>
            </ol>
        <img :src="imgUrl" :alt="'선택된 메뉴: ' + selectedName" width="80" height="80">
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

import pic_bulboff from '../assets/pic_bulboff.gif'
import pic_bulbon from '../assets/pic_bulbon.gif'

import img_burrito from '../assets/img_burrito.svg'
import img_cake from '../assets/img_cake.svg'
import img_fish from '../assets/img_fish.svg'
import img_pizza from '../assets/img_pizza.svg'
import img_rice from '../assets/img_rice.svg'
import img_salad from '../assets/img_salad.svg'
import img_soup from '../assets/img_soup.svg'

const cnt = ref(0)
// 전구불을 켜고 끄는 토글 버튼
const lightOn = ref(false)

// 키 입력시에 카운트를 증가
const inpCount = ref (0)

// 색상 값
const colorVal = ref (50)

// 메뉴판
const foods_assets = ref([
      {name: '부리또', src: img_burrito},
      {name: '샐러드', src: img_salad},
      {name: '케이크', src: img_cake},
      {name: '스프', src: img_soup},
      {name: '생선', src: img_fish},
      {name: '피자', src: img_pizza},
      {name: '밥', src: img_rice},
])

const imgUrl = ref (img_burrito)
</script>

<style scoped>
.temp-bg {
    height: 100%;
}

.bg {
    width: 200px;
    height: 50px;
    background-color: aqua;
    display: inline-block;
}

.menu > ol{
    width: 50px;
    float: left;
}
.menu li:hover{
    cursor: pointer;
    background-color: rgb(245, 248, 80);
}
.menu > img{
    width: 200px;
    height: 200px;
}

.enter {
    clear: both;
}

</style>
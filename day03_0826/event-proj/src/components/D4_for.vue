<template>
  <li v-for="item in items">{{ item.message }}</li>
  <li v-for="item in items">{{ item.message }}</li>
  <hr>
  <li v-for="food in manyFoods"> 메뉴</li>
  <li v-for="food in manyFoods">- {{ food }}</li>
  <ol>
    <li v-for="food in manyFoods">{{ food }}</li>
  </ol>
  <hr>

  <!-- <li v-for="food in foods_assets">음식 사진{{ food }}</li> -->
  <!-- <div v-for="food in foods_assets" :key="food.name">
      <li>음식들 : {{ food.name }}</li>
      <img :src="food.src" alt="food.name" width="50">
  </div> -->
  <div class="food-style" v-for="food in foods_assets" :key="food.name">
    <img :src="food.src" :alt="food.name">
     <li>{{ food.name }}</li>
  </div>
  <hr>
  <div class="food-style2" v-for="food in foods_public" :key="food.name">
    <!-- <img src="/images/img_burrito.svg" alt="food.name"> -->
     <img :src="food.src" :alt="food.name">
    <li>{{ food.name }}</li>
    <p class="enter"></p>
  </div>
  <hr>
  <!-- 인덱스 가져오기 -->
   <li v-for="(food, index) in manyFoods">{{index}}번 {{ food }}</li>
</template>

<script setup>
import { ref } from 'vue';
import img_burrito from '../assets/img_burrito.svg'
import img_cake from '../assets/img_cake.svg'
import img_fish from '../assets/img_fish.svg'
import img_pizza from '../assets/img_pizza.svg'
import img_rice from '../assets/img_rice.svg'
import img_salad from '../assets/img_salad.svg'
import img_soup from '../assets/img_soup.svg'

// [{key 키 : value 값}, {}]
const items = ref([
  {message: 'FOO'}, 
  {message: 'Bar'}, 
  {message: 'Bar2'}
])

const manyFoods = ref([
  '부리또' ,
  '샐러드' ,
  '케이크' ,
  '스프' ,
  '생선' ,
  '피자' ,
  '밥'
])
// assets에 저장한 이미지 사용하기
const foods_assets = ref([
  {name: '부리또', src: img_burrito},
  {name: '샐러드', src: img_salad},
  {name: '케이크', src: img_cake},
  {name: '스프', src: img_soup},
  {name: '생선', src: img_fish},
  {name: '피자', src: img_pizza},
  {name: '밥', src: img_rice},
])
// public에 저장한 이미지 사용하기
const foods_public = ref([
  {name: '부리또', src: "/images/img_burrito.svg"},
  {name: '샐러드', src: "/images/img_salad.svg"},
  {name: '케이크', src: "/images/img_cake.svg"},
  {name: '스프', src: "/images/img_soup.svg"},
  {name: '생선', src: "/images/img_fish.svg"},
  {name: '피자', src: "/images/img_pizza.svg"},
  {name: '밥', src: "/images/img_rice.svg"},
])
</script>

<style scoped>
.food-style{
  width: 50px;
}
</style>


<style scoped>

.food-style {
  display: flex;              /* 이미지와 텍스트를 가로로 배치 */
  align-items: center;        /* 수직 중앙 정렬 */
  gap: 6px;                   /* 이미지와 텍스트 사이 간격 */
  width: auto;                /* 고정 폭 대신 내용 크기에 맞춤 */
  margin: 4px 0;              /* 아이템 간 여백 */
}

.food-style2 {
  display: flex;
  align-items: center;
  gap: 6px;
  width: auto;
  margin: 4px 0;
}

.food-style2 img {
  width: 50px;
  height: 50px;
  object-fit: contain;        /* 이미지 비율 유지 */
}

.food-style img {
  width: 50px;
  height: 50px;
  object-fit: contain;        /* 이미지 비율 유지 */
}

.food-style span {
  font-size: 14px;
  color: #333;                /* 텍스트 기본 색상 */
}

.li {
  list-style: none;
  font-weight: bold;
  color: #e2ffad;
}
</style>

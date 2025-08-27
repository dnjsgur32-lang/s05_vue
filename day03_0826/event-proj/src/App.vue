<script setup>
import { ref } from 'vue';
import D1_bind from './components/D1_bind.vue';
import D2_if from './components/D2_if.vue';
import D3_show from './components/D3_show.vue';
import D4_for from './components/D4_for.vue';
import D5_Event from './components/D5_Event.vue';

// 컴포넌트 매핑 (스크립에서 해줘야함)
const pages = {D1_bind, D2_if, D3_show, D4_for, D5_Event }
const activeComp = ref('D5_Event')

</script>

<template>
  <!-- <D1_bind/>
  <D2_if/>
  <D3_show/>
  <D4_for/> -->
  <!-- 버튼 클릭시 컴포넌트 전환 -->
  <button @click="activeComp = 'D1_bind'">v-bind : 변수 사용하겠다</button>
  <button @click="activeComp = 'D2_if'">v-if : 조건 분기</button>
  <button @click="activeComp = 'D3_show'">v-show : 보이다/감추다</button>
  <button @click="activeComp = 'D4_for'">v-for : ~동안 실행</button>
  <button @click="activeComp = 'D5_Event'">event : 반응형 이벤트</button>

  <div class="page-view">
    <keep-alive>
    <component :is="pages[activeComp]"></component>
    </keep-alive>
    
  </div>
</template>

<style scoped>
  .page-view{
    margin: 20px;
    border: 3px dashed greenyellow;
    background-color: rgb(255, 242, 242);
  }

</style>

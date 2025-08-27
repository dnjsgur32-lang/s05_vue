<template>
    <div class="bg">
        <div class="b1">
            <!-- 양방향 바인딩 -->
            <input type="text" v-model="inpText">
                <p>출력: {{ inpText }}</p>
                <hr>
        </div>
        <div class="bg">
        <div class="b2">
            <p>중요한가요?<label>
                <input type="checkbox" v-model="important">
                {{ important }}</label></p>
                <hr>
            </div>
        </div>
        <div class="bg">
            <div class="b3">
                <form @submit.prevent="addItem">
                    <p>목록: <input type="text" v-model="itemName" placeholder="목록 이름을 입력하세요."></p>
                    <p>갯수: <input type="text" v-model="itemNumber" placeholder="갯수를 입력하세요."></p>
                    <p>중요성: <input type="checkbox" v-model="itemImportant">
                    {{ itemImportant }}</p>
                    <button type="submit">목록 추가</button>
                </form>
                <hr>
                <p><strong>===구매 목록===</strong></p>
                    <ul>
                        <li v-for="list in shoppingList">
                            물건: {{ list.name }}
                            갯수: {{ list.number }}
                            중요성: {{ list.important ? '중요' : '보통'}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script setup>
import { ref } from 'vue';
// 양방향 바인딩
const inpText = ref('Initial text')
const important = ref(false)

// 폼 상태
const itemName = ref(null)
const itemNumber = ref(null)
const itemImportant = ref(false)

const addItem = () => {
    let item ={
        name: itemName.value,
        number: itemNumber.value,
        important: itemImportant.value
    }
    shoppingList.value.push(item)
    // 목록 init (초기화)
    itemName.value = null
    itemNumber.value = null
    itemImportant = false
}

const shoppingList = ref([
    { name: '토마토', number: 5, important: false },
    { name: '바나나', number: 3, important: true }
])
</script>

<style scoped>

/* 컨테이너를 한 칼럼 그리드로 */
.bg{
  display: grid;
  grid-template-columns: 1fr; /* ← 핵심: 한 칼럼 */
  gap: 12px;
  padding: 12px;
  border: 1px solid #cfe;
  border-radius: 8px;
  background-color: bisque;
}

/* 카드 공통 */
.b1, .b2, .b3{
  width: 100%;
  padding: 12px;
  border-radius: 6px;
}



/* (중첩 .bg가 있다면 평탄화) */
.bg .bg{ display: contents; }

.b3 ul{
  list-style: decimal inside; /* 점 → 숫자, 그리고 문장 쪽으로 붙임 */
  padding-left: 0;            /* 왼쪽 들여쓰기 제거 */
  margin: 0;                  /* 필요 시 여백 제거 */
}
</style>
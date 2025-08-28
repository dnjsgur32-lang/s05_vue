<template>
  <div class="km-page">
    <!-- 좌측 네비 -->
    <SideNav />

    <!-- 메인: 슬라이더(300) + 콘텐츠(200) -->
    <main class="km-main">
      <Slider />
      <Contents @open-notice="openPopup" :onNoticeClick="openPopup" />
      <Footer />
    </main>

    <!-- 우측 200 여백/위젯 영역 -->
    <aside class="km-right"></aside>

    <!-- 모달 팝업 -->
    <Popup v-if="isPopupOpen" @close="isPopupOpen = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

// ✅ projects2 경로로 정정
import SideNav   from '@/components/projects2/SideNav.vue'
import Slider   from '@/components/projects2/Slider.vue'
import Contents from '@/components/projects2/Contents.vue'
import Footer   from '@/components/projects2/Footer.vue'
import Popup    from '@/components/projects2/Popup.vue'

const isPopupOpen = ref(false)
const openPopup   = () => { isPopupOpen.value = true }
</script>

<style scoped>
.km-page {
  display: grid;
  grid-template-columns: 200px 1fr 200px; /* 좌 200 / 메인 / 우 200 */
  gap: 16px;
}

.km-main {
  /* 페이지 단위 여백 조절이 필요하면 여기에 */
  padding: 0;
}

.km-right {
  /* 우측 보조 영역 (배너/QR/링크 등) */
}
</style>

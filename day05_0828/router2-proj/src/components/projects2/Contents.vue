<template>
  <div class="km-contents">
    <!-- 김치이야기 콘텐츠 영역 -->
    <section class="notice">
      <h2>공지사항</h2>
      <ul>
        <li><a href="#">김치 레시피 공모전</a></li>
        <li><a href="#">체험 프로그램 예약 시작</a></li>
      </ul>
    </section>

    <section class="gallery">
      <h2>갤러리</h2>
      <div class="gallery-items">
        <div class="gallery-item">이미지 1</div>
        <div class="gallery-item">이미지 2</div>
        <div class="gallery-item">이미지 3</div>
      </div>
    </section>

    <section class="banner">
      <h2>배너</h2>
      <img src="@/assets/images/banner.jpg" alt="배너 이미지" />
    </section>

    <section class="shortcut">
      <h2>바로가기</h2>
      <img src="@/assets/images/shortcut.jpg" alt="바로가기 이미지" />
    </section>
  </div>
</template>

<script setup>
/* 아직 특별한 로직은 없지만, 
   나중에 팝업 열기 같은 이벤트 핸들러를 여기에 추가할 수 있음 */
</script>

<style scoped>
.km-contents {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 16px;
}

section h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.notice ul {
  list-style: none;
  padding: 0;
}

.notice li {
  margin-bottom: 6px;
}

.gallery-items {
  display: flex;
  gap: 8px;
}

.gallery-item {
  background: #eee;
  flex: 1;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner img,
.shortcut img {
  width: 100%;
  border-radius: 6px;
}
</style>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <!-- 상단 헤더: 제목(위) + 메뉴(아래, 가운데) -->
  <header class="site-header">
    <div class="container header-stack">
      <RouterLink to="/" class="brand" aria-label="홈으로">
        이정현 Vue 과제
      </RouterLink>

      <nav class="main-nav" aria-label="메뉴">
        <RouterLink
          to="/"
          class="nav-link"
          :class="{ active: route.path === '/' }"
        >Home</RouterLink>

        <RouterLink
          to="/about"
          class="nav-link"
          :class="{ active: route.path.startsWith('/about') }"
        >About</RouterLink>

        <RouterLink
          to="/study"
          class="nav-link"
          :class="{ active: route.path.startsWith('/study') }"
        >StudyView</RouterLink>

        <RouterLink
          to="/wd"
          class="nav-link"
          :class="{ active: route.path.startsWith('/wd') }"
        >WebDesign</RouterLink>
      </nav>
    </div>
  </header>

  <!-- 본문 -->
  <main class="container page">
    <RouterView :key="$route.fullPath" />
  </main>
</template>

<style scoped>
/* 헤더를 상단 고정 + 심플 */
.site-header{
  position: sticky;
  top: 0;
  z-index: 50;
  background: #fff;
  border-bottom: 1px solid var(--line);
}

/* 제목 위 / 메뉴 아래, 가운데 정렬 */
.header-stack{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 14px 0 8px;
}

/* 제목(브랜드) */
.brand{
  font-size: 20px;
  font-weight: 800;
  letter-spacing: .2px;
  color: var(--text);
  text-decoration: none;
}

/* 메뉴(가운데) */
.main-nav{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.nav-link{
  padding: 8px 12px;
  border-radius: 999px;
  color: #374151;
  text-decoration: none;
}
.nav-link:hover{
  background: #f3f4f6;
}
.nav-link.active{
  background: #f3f4f6;
  color: var(--brand);
}

/* 본문 영역 기본 여백 */
.page{
  padding: 20px 0 40px;
  min-height: 60vh;
}
</style>

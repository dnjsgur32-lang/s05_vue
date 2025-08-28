<script setup>

</script>

<template>
  <p><strong>현재 경로:</strong> {{ $route.fullPath }} </p>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Go to Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">Go to About</RouterLink>
        </li>
         <li>
          <RouterLink to="/study">Go to StudyView</RouterLink>
        </li>
         <li>
          <RouterLink to="/wd">Go to Ex_WebDesign</RouterLink>
        </li>
      </ul>
      </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>

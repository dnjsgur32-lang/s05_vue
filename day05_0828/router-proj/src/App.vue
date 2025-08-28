<script setup>

</script>

<template>
  <p>경로:  {{ $route.fullPath }} </p>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Go to Home</RouterLink>
        </li>
        <li><RouterLink to="/about">Go to About</RouterLink>
        </li>
      </ul>
      </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>

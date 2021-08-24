<template>
  <div id="app" class="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <span>|</span>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="postcss">
.app {
  @apply font-sans;
  @apply text-center;
  @apply text-[#374961];
  @apply text-base;
}

.logo {
  @apply w-[20%];
}

.nav {
  @apply pt-[30px];
  @apply pb-[100px];

  a {
    @apply font-medium;
    @apply text-[#374961];
    @apply mx-[5px];
  }

  a.router-link-exact-active {
    @apply text-[#41b783];
  }
}
</style>

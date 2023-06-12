<template>
  <div class="site-navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/projects/">Projects</router-link>
    <router-link to="/profile/">Profile</router-link>
  </div>
</template>

<style>
.site-navigation {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}
</style>

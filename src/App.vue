<script setup>
import Navigation from './components/Navigation.vue';
</script>

<template>
  <Navigation />
  <router-view></router-view>
</template>

<script>
export default {
  components: {
    Navigation,
  },
  computed: {},
  mounted() {},
  data() {
    return {};
  },
};
</script>
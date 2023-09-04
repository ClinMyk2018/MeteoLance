<template>
  <div>
    <header class="site-header">
      MeteoLance
    </header>
    <div class="site-navigation">
      <div class="nav-left">
        <div class="nav-item" v-for="route in leftRoutes" :key="route.name">
          <router-link :to="route.path" active-class="active-link">
            {{ route.name }}
          </router-link>
        </div>
      </div>
      <div class="nav-right">
        <div class="nav-item" v-for="route in rightRoutes" :key="route.name">
          <router-link :to="route.path" active-class="active-link">
            {{ route.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftRoutes: [
        { name: 'Home', path: '/home/' },
        { name: 'Projects', path: '/projects/' },
      ],
      rightRoutes: [
        { name: 'Profile', path: '/profile/' }
      ]
    };
  },
};
</script>

<style>
.site-header {
  background-color: #333;
  color: white;
  font-size: 2rem;
  padding: 1rem .5rem;
  text-align: left;
  border: 3px solid #000;
}

.site-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  border: 1px solid #444;
  margin-top: 1px;
  padding: 1rem 0rem;
  font-size: .8rem;
}

.nav-left, .nav-right {
  display: flex;
}

.nav-item {
  margin: 0 15px;
  transition: all 0.3s ease;
}

a {
  color: white;
  text-decoration: none;
  padding-bottom: 0;
}

a:hover {
  color: red;
}

.router-link-exact-active,
.active-link {
  color: red;
  font-weight: bold;
}

@media screen and (min-width: 768px) {
  .site-header {
    font-size: 2.5rem;
    padding: 1rem 1rem;
  }
  .site-navigation {
    padding: 1rem 1rem;
    font-size: 1rem;
  }
}

@media screen and (min-width: 1024px) {
  .site-header {
    font-size: 3.5rem;
  }
}

</style>

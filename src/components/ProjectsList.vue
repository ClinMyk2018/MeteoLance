<script setup>
import {useProjects} from '../store/store';
</script>

<style>
.projects-panel {
  padding: 3rem 1rem;
  background-color: rgb(18, 72, 0);
  border: 2px solid rgb(62, 246, 0);
  border-radius: 5px;
}
.projects-panel_title {
  color: #fff;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}
.projects-panel_main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000;
  border: 2px solid #fff;
  border-radius: 5px;
}
.projects-panel_card {
  display: flex;
  justify-content: left;
  background-color: #fff;
  border: 2px solid rgb(62, 246, 0);
  border-radius: 5px;
  padding: 1rem;
  margin: 10px;
}
.projects-panel_card-sections {
  display: flex;
}
</style>

<template>
<div class="projects-panel">
  <h1 class="projects-panel_title">Projects</h1>

  <div class="projects-panel_main">
    <div class="projects-panel_card" v-for="project in projects" :key="project.id">
      <div class="projects-panel_card-sections">
        <div class="projects-panel_card-sections_detail">
          <strong class="">{{ project.category }}</strong>
          <h3 class="">{{ project.title }}</h3>
          <div class="">{{ project.author }}</div>
          <p class="">{{ project.publisher }}</p>
          <p class="">{{ project.description }}</p>
          <p class="">{{ project.isbn13 }}</p>
          <p class="">{{ project.currency }}{{ project.price }}</p>
        </div>
      </div>
    </div>


  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'pinia'

export default {
  computed: {
    ...mapState(useProjects, {projects: 'results'})
  },

  methods: {
    ...mapActions(useProjects, ['fetchProjects']),

    addToCart() {
      // we'll populate this later
    }
  },

  created() {
    // when the template is created, we call this action
    this.fetchProjects();
  }
};
</script>
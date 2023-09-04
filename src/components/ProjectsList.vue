<style>
.projects-panel {
  padding: 3rem 1rem;
  margin-top: 10px;
  margin-bottom: 10px;
}
.projects-panel_title {
  color: #000;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}
.projects-panel_main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.projects-panel_card {
  display: flex;
  justify-content: left;
  background-color: #fff;
  border: 2px solid #555;
  border-radius: 5px;
  padding: 1rem;
  margin: 5px;
  width: 100%;
}
.projects-panel_card:hover {
  border: 2px solid #444;
  box-shadow: 0px 12px 20px 0px rgba(0,0,0,0.4);
}
.projects-panel_card-sections {
  display: flex;
}

@media screen and (min-width: 768px) {
  .projects-panel_card {
    width: 40%;
  }
}

@media screen and (min-width: 1024px) {
  .projects-panel_card {
    width: 25%;
  }
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
          <div class="">{{ project.company }}</div>
          <p class="">{{ project.description }}</p>
          <p class="">{{ project.years }}</p>
        </div>
      </div>
    </div>


  </div>
</div>
</template>

<script>
import {useProjects} from '../store/projectsStore';
import { mapState, mapActions } from 'pinia'

export default {
  computed: {
    ...mapState(useProjects, {projects: 'results'})
  },

  methods: {
    ...mapActions(useProjects, ['fetchProjects']),
  },

  created() {
    this.fetchProjects();
  }
};
</script>
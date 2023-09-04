import {createRouter} from 'vue-router';
import Homepage from './home/HomePage.vue'
import Projects from './projects/ProjectsPage.vue';
import Profile from './profile/ProfilePage.vue';

const routes = [
  {
    path: '/',
    component: Projects
  },

  {
    path: '/projects/',
    component: Projects
  },

  {
    path: '/home/',
    component: Homepage
  },

  {
    path: '/profile/',
    component: Profile
  },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}
import {createRouter} from 'vue-router';
import Homepage from './home/Homepage.vue';
import Projects from './projects/ProjectsPage.vue';
import Profile from './profile/ProfilePage.vue';

const routes = [
  {
    path: '/',
    component: Homepage
  },

  {
    path: '/projects/',
    component: Projects
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
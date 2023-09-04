import { defineStore } from 'pinia'

export const useProfile = defineStore('profile-store', {
  state: () => {
    return {
      tabs: [
        { name: 'Overview', label: 'Overview' },
        { name: 'Settings', label: 'Settings' },
        { name: 'Activity', label: 'Activity' },
      ],
    }
  },

  getters: {
    getTabs(state) {
      return state.tabs;
    }
  },

  actions: {
  }
})
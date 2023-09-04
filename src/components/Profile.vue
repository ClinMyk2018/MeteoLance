<script setup>
import {useProfile} from '../store/profileStore';

</script>

<style>
    .profile-container {
      display: flex;
      flex-direction: row;
      height: 100%;
    }
    .profile-container-sidebar {
      width: 200px;
      border-right: 1px solid #ccc;
    }
    .profile-container-content {
      flex-grow: 1;
      padding: 20px;
    }
    .active {
      background-color: #ddd;
    }
</style>

<template>
    <div class="profile-container">
        <div class="profile-container-sidebar">
            <ul>
            <li v-for="tab in tabsGroup" :key="tab.name" 
                :class="{ active: currentTab === tab.name }" 
                @click="currentTab = tab.name">
                {{ tab.label }}
            </li>
            </ul>
        </div>
        <div class="profile-container-content">
            <div v-for="tab in tabsGroup" :key="tab.name">
                <div v-if="currentTab === tab.name">
                    <h1>{{ tab.label }}</h1>
                    <p>This is the {{ tab.name }} content</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'

export default {
    data() {
        return {
            currentTab: 'Overview',
        }
    },
    computed: {
        ...mapState(useProfile, {tabsGroup: 'getTabs'}),
    },
    methods: {
    },

    created() {
    }
};
</script>
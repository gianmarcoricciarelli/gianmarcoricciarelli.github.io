<script setup lang="ts">
import NavBarItem from './NavBarItem.vue';

const navBarItems: string[] = ['home', 'experiences', 'about', 'contacts'];

function onNavBarItemClicked(clickedLabel: string): void {
    console.log(clickedLabel);
}
</script>

<template>
    <div class="flex justify-between">
        <NavBarItem v-for="(item, index) in navBarItems" :key="index" v-bind:label="item" @nav-bar-item-clicked="onNavBarItemClicked" />
    </div>
</template>

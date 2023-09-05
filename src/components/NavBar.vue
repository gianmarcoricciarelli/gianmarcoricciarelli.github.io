<script setup lang="ts">
    import NavBarItem from './NavBarItem.vue';

    const navBarItems: string[] = ['home', 'experiences', 'about', 'contacts'];

    function onNavBarItemClicked(clickedLabel: string): void {
        console.log(clickedLabel);
    }
</script>

<template>
    <div class="flex w-full justify-evenly">
        <NavBarItem v-for="item in navBarItems" v-bind:label="item" @nav-bar-item-clicked="onNavBarItemClicked" />
    </div>
</template>

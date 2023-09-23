<script setup lang="ts">
import { inject } from 'vue';
import NavBarItem from './NavBarItem.vue';
import { Sections } from '../types';
import { selectedSectionKey } from './provideKeys';
import ToggleButton from './ToggleButton.vue';
import LanguageSelection from './LanguageSelection/LanguageSelection.vue';

const navBarItems: Sections[] = ['home', 'experiences', 'about', 'contacts'];

const selectedSection = inject(selectedSectionKey);

function onNavBarItemClicked(clickedLabel: Sections): void {
    if (selectedSection?.value !== undefined) {
        selectedSection.value = clickedLabel;
    }
}
</script>

<template>
    <div class="flex justify-between">
        <LanguageSelection />
        <ToggleButton />
    </div>
    <nav class="flex justify-between">
        <NavBarItem v-for="(item, index) in navBarItems" :key="index" v-bind:label="item" @nav-bar-item-clicked="onNavBarItemClicked" />
    </nav>
</template>

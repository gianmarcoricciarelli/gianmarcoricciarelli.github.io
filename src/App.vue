<script setup lang="ts">
import { computed, provide, ref } from 'vue';
import ContentContainer from './components/ContentContainer.vue';
import FooterContainer from './components/FooterContainer.vue';
import NavBar from './components/NavBar.vue';
import ToggleButton from './components/ToggleButton.vue';

const darkModeSelected = ref(false);
provide('darkModeSelected', darkModeSelected);

const computedClasses = computed<Record<string, boolean>>(() => ({
    'bg-slate-50': !darkModeSelected.value,
    'bg-slate-800': darkModeSelected.value,
    'text-slate-900': !darkModeSelected.value,
    'text-slate-100': darkModeSelected.value,
}));
</script>

<template>
    <div class="flex h-screen flex-col justify-between px-5 py-4 transition-all duration-300" :class="computedClasses">
        <div class="flex flex-col gap-1">
            <div class="flex justify-end">
                <ToggleButton />
            </div>
            <NavBar />
        </div>
        <ContentContainer />
        <FooterContainer />
    </div>
</template>

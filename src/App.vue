<script setup lang="ts">
import { computed, provide, ref, Ref } from 'vue';
import { Mode, Sections } from './types';
import { modeKey, selectedSectionKey } from './components/provideKeys';
import ContentContainer from './components/ContentContainer.vue';
import FooterContainer from './components/FooterContainer.vue';
import NavBar from './components/NavBar.vue';

const mode: Ref<Mode> = ref('light');
provide(modeKey, mode);

const selectedSection: Ref<Sections> = ref('home');
provide(selectedSectionKey, selectedSection);

const computedClasses = computed<Record<string, boolean>>(() => {
    if (mode.value === 'light') {
        return {
            'bg-slate-50': true,
            'bg-slate-800': false,
            'text-slate-900': true,
            'text-slate-100': false,
        };
    }

    return {
        'bg-slate-50': false,
        'bg-slate-800': true,
        'text-slate-900': false,
        'text-slate-100': true,
    };
});
</script>

<template>
    <div class="flex h-screen flex-col justify-between px-5 py-4 transition-all duration-300" :class="computedClasses">
        <div class="flex flex-col gap-1">
            <NavBar />
        </div>
        <ContentContainer :section="selectedSection" />
        <FooterContainer />
    </div>
</template>

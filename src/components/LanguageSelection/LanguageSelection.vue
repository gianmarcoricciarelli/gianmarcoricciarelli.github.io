<script setup lang="ts">
import { inject, watch } from 'vue';
import { i18n } from '../../i18n';
import { Language } from '../../types';
import { modeKey } from '../provideKeys';
import LanguageSelector from './LanguageSelector.vue';
import gsap from 'gsap';

const mode = inject(modeKey);

watch(
    () => mode?.value,
    (newMode) => {
        gsap.to('#selection-bar', { backgroundColor: newMode === 'dark' ? '#F1F5F9' : '#0F172A', duration: 0.3 });
    },
);

const onLanguageSelectedHandler = (language: Language): void => {
    gsap.to('#selection-bar', { left: language === 'it' ? 28 : 0, duration: 0.3 });
};
</script>

<template>
    <div class="flex w-14 flex-col gap-1">
        <div class="flex">
            <LanguageSelector
                v-for="language in i18n.global.availableLocales"
                :key="language"
                :language="language"
                :is-selected="language === i18n.global.locale.value"
                @language-selected="onLanguageSelectedHandler"
            />
        </div>
        <div class="relative h-1 w-14">
            <div id="selection-bar" class="absolute h-1 w-7 bg-slate-900"></div>
        </div>
    </div>
</template>

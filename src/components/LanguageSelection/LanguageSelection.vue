<script setup lang="ts">
import { Ref, ref } from 'vue';
import { i18n } from '../../i18n';
import { Language } from '../../types';

const activeLanguage: Ref<Language> = ref('en');
console.log('activeLanguage:', activeLanguage.value);

const onClickHandler = (language: Language): void => {
    i18n.global.locale.value = language;
    activeLanguage.value = language;
};
</script>

<template>
    <div class="flex gap-1">
        <p
            class="cursor-pointer transition-all"
            :class="{ 'border-2': activeLanguage === 'it', 'border-cyan-500': activeLanguage === 'it' }"
            @click="onClickHandler('it')"
        >
            ITA
        </p>
        <p
            class="cursor-pointer transition-all"
            :class="{ 'border-2': activeLanguage === 'en', 'border-cyan-500': activeLanguage === 'en' }"
            @click="onClickHandler('en')"
        >
            ENG
        </p>
    </div>
</template>

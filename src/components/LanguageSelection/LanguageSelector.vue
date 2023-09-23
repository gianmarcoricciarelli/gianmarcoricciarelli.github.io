<script setup lang="ts">
import { Language } from '../../types';
import { i18n } from '../../i18n';

const props = defineProps<{ language: Language; isSelected: boolean }>();
const emit = defineEmits<{ (e: 'languageSelected', language: Language): void }>();

const onClickHandler = (language: Language): void => {
    i18n.global.locale.value = language;
    emit('languageSelected', language);
};
</script>

<template>
    <div class="flex h-7 w-7 justify-center" :style="{ '-webkit-tap-highlight-color': 'transparent' }">
        <p class="cursor-pointer" @click="onClickHandler(props.language)">
            {{ language.toUpperCase() }}
        </p>
    </div>
</template>

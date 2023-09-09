<script lang="ts" setup>
import { Ref, computed, inject, ref } from 'vue';

const darkModeSelected = inject<Ref<boolean>>('darkModeSelected');
const transitionForward = ref(false);

const buttonClasses = computed<Record<string, boolean>>(() => {
    if (darkModeSelected?.value) {
        return {
            '-translate-x-full': transitionForward.value,
            'bg-slate-50': !darkModeSelected.value,
            'bg-slate-800': darkModeSelected.value,
            'border-slate-900': !darkModeSelected.value,
            'border-slate-100': darkModeSelected.value,
            'left-0': !transitionForward.value,
            'left-full': transitionForward.value,
        };
    }

    return {
        '-translate-x-full': transitionForward.value,
        'bg-slate-50': true,
        'bg-slate-800': false,
        'border-slate-900': true,
        'border-slate-100': false,
        'left-0': !transitionForward.value,
        'left-full': transitionForward.value,
    };
});
const containerClasses = computed<Record<string, boolean>>(() => ({
    'bg-slate-300': !transitionForward.value,
    'bg-slate-700': transitionForward.value,
}));

function onClickHandler() {
    transitionForward.value = !transitionForward.value;

    if (darkModeSelected?.value) {
        darkModeSelected.value = !darkModeSelected.value;
    }
}
</script>

<template>
    <div
        :class="containerClasses"
        class="relative flex h-6 w-10 items-center justify-end rounded-full border-4 border-transparent transition-all duration-300 hover:cursor-pointer"
        :style="{ '-webkit-tap-highlight-color': 'transparent' }"
        @click="onClickHandler"
    >
        <span :class="buttonClasses" class="absolute h-4 w-4 rounded-full border-2 transition-all duration-300"></span>
    </div>
</template>

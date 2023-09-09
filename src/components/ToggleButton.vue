<script lang="ts" setup>
import { computed, inject, ref } from 'vue';
import { modeKey } from './provideKeys';

const mode = inject(modeKey);
const transitionForward = ref(false);

const buttonClasses = computed<Record<string, boolean>>(() => {
    if (mode?.value === 'light') {
        return {
            '-translate-x-full': transitionForward.value,
            'bg-slate-50': true,
            'bg-slate-800': false,
            'border-slate-900': true,
            'border-slate-100': false,
            'left-0': !transitionForward.value,
            'left-full': transitionForward.value,
        };
    }

    return {
        '-translate-x-full': transitionForward.value,
        'bg-slate-50': false,
        'bg-slate-800': true,
        'border-slate-900': false,
        'border-slate-100': true,
        'left-0': !transitionForward.value,
        'left-full': transitionForward.value,
    };
});
const containerClasses = computed<Record<string, boolean>>(() => ({
    'bg-slate-200': !transitionForward.value,
    'bg-slate-700': transitionForward.value,
}));

function onClickHandler() {
    transitionForward.value = !transitionForward.value;

    if (mode?.value !== undefined) {
        mode.value = mode?.value === 'light' ? 'dark' : 'light';
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

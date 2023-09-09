<script setup lang="ts">
import { Sections } from '../types';

const props = defineProps<{
    readonly label: Sections;
}>();

defineEmits<{ (e: 'navBarItemClicked', label: Sections): void }>();
</script>

<template>
    <p class="hover:cursor-pointer" v-t="props.label" @click="$emit('navBarItemClicked', props.label)"></p>
</template>

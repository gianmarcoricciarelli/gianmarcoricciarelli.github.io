<script setup lang="ts">
    const props = defineProps<{
        readonly label: string;
    }>();

    defineEmits<{ (e: 'navBarItemClicked', label: string): void }>();
</script>

<template>
    <p class="hover:cursor-pointer" v-t="props.label" @click="$emit('navBarItemClicked', props.label)"></p>
</template>

<script setup lang="ts">
    interface HelloWordProps {
        message: string;
        value: number;
    }

    defineProps<HelloWordProps>();
</script>

<template>
    <p v-t="'hello'"></p>
</template>

<style scoped></style>

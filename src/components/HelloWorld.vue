<script setup lang="ts">
    interface HelloWordProps {
        message: string;
        value: number;
    }

    defineProps<HelloWordProps>();
</script>

<template>
    <p class="p-8">{{ message }}</p>
</template>

<style scoped></style>

<script setup lang="ts">
import { Sections } from '../types';

defineProps<{
    section: Sections;
}>();
</script>

<template>
    <p>
        {{ section }}
    </p>
</template>

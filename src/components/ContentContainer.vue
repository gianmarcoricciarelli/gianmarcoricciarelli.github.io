<script setup lang="ts">
import { Sections } from '../types';

defineProps<{
    section: Sections;
}>();
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <p>
            {{ section }}
        </p>
    </div>
</template>

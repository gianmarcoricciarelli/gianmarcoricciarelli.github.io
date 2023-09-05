<script setup lang="ts">
    import NavBar from './components/NavBar.vue';
    import ContentContainer from './components/ContentContainer.vue';
    import FooterContainer from './components/FooterContainer.vue';
</script>

<template>
    <div class="flex h-screen flex-col justify-between px-5 py-4">
        <NavBar />
        <ContentContainer />
        <FooterContainer />
    </div>
</template>

<template>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

useHead({
    title: 'WhatsApp',
})

onMounted(() => {
    window.location.href = "https://wa.me/6289525009655";
});

</script>
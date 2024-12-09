<script setup>
const { custom = "text-center", mx = "mx-auto" } = defineProps([
    "custom",
    "mx",
]);
</script>

<template>
    <h3
        class="text-primary-400 max-lg:text-lg text-3xl w-fit font-bold uppercase"
        :class="(custom, mx)"
    >
        <slot></slot>
    </h3>
</template>

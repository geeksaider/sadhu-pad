<script setup>
const { custom = "text-center" } = defineProps(["custom"]);
</script>

<template>
    <h3
        class="text-primary-400 max-md:text-lg text-3xl w-fit mx-auto font-bold uppercase"
        :class="custom"
    >
        <slot></slot>
    </h3>
</template>

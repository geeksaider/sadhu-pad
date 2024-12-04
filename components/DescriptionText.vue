<script setup>
const { custom } = defineProps(["custom"]);
</script>

<template>
    <p
        class="basis-1/2 uppercase max-md:text-xs max-md:leading-5 max-sm:text-[8px] max-sm:leading-4 text-primary-400"
        :class="custom"
    >
        <slot></slot>
    </p>
</template>

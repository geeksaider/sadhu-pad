<script setup>
const { wood, catalog, trash } = defineProps(["wood", "catalog", "trash"]);
</script>
<template>
    <div class="flex items-center justify-between mx-auto max-w-4xl">
        <img
            src="/assets/images/lotos.svg"
            alt="Лотос, Lotos"
            class="size-12"
        />
        <div class="flex gap-24">
            <a
                class="uppercase font-medium text-primary-400 hover:text-primary-700"
                :class="wood"
                >О досках</a
            >
            <a
                href=""
                class="uppercase font-medium text-primary-400 hover:text-primary-700"
                :class="catalog"
                >Каталог</a
            >
            <a
                href=""
                class="uppercase font-medium text-primary-400 hover:text-primary-700"
                :class="trash"
                >Корзина</a
            >
        </div>
    </div>
</template>

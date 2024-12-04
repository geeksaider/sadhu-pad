<script setup>
const {
    wood = "hover:scale-105",
    catalog = "hover:scale-105",
    trash = "hover:scale-105",
} = defineProps(["wood", "catalog", "trash"]);
</script>
<template>
    <div
        class="flex items-center justify-between max-lg:justify-around mx-auto max-w-4xl"
    >
        <a href="">
            <img
                src="../public/lotos.svg"
                alt="Лотос, Lotos"
                class="size-12 hover:cursor-pointer max-lg:size-8"
            />
        </a>
        <div class="hidden max-lg:block">
            <h1
                class="uppercase text-primary-400 text-center text-xl font-bold"
            >
                Доски садху
            </h1>
        </div>
        <div class="hidden max-lg:block">
            <img src="../public/burger.svg" alt="" />
        </div>
        <div class="flex gap-24 max-lg:hidden">
            <a
                href=""
                class="uppercase font-medium text-primary-400 hover:text-primary-700"
                :class="wood"
                >О досках</a
            >
            <a
                href=""
                class="uppercase font-medium text-primary-400 hover:scale-105 hover:text-primary-700"
                :class="catalog"
                >Каталог</a
            >
            <a
                href=""
                class="uppercase font-medium text-primary-400 hover:scale-105 hover:text-primary-700"
                :class="trash"
                >Корзина</a
            >
        </div>
    </div>
</template>

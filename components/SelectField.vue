<script setup>
const {
    type,
    category,
    link,
    custom = "min-w-[240px]",
    error = " ",
} = defineProps(["type", "category", "link", "custom", "error"]);

const selectedRadio = defineModel();
</script>
<template>
    <div
        class="flex justify-between items-center hover:scale-105 transition-all bg-stone-200/60 w-fit rounded-xl pr-5"
        :class="custom + ' ' + error"
    >
        <img
            :src="`catalog-images/${link}.png`"
            class="size-16 rounded-lg"
            alt="Ваш цвет"
        />
        <label :for="type" class="text-xl uppercase font-bold"
            ><slot> </slot>
        </label>
        <input
            type="radio"
            :id="type"
            :value="type"
            v-model="selectedRadio"
            class="size-6"
            :name="category"
        />
    </div>
</template>

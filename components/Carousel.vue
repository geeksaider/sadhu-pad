<script setup>
const { carousel = ["carousel1", "carousel2", "carousel3"], custom } =
    defineProps(["carousel", "custom"]);
const n = ref([0]);

function downPNG() {
    n.value == 0 ? (n.value = carousel.length - 1) : n.value--;
}
function nextPNG() {
    n.value == carousel.length - 1 ? (n.value = 0) : n.value++;
}
</script>
<template>
    <div
        class="flex max-w-5xl my-12 mx-auto max-lg:max-w-[700px] max-lg:justify-center max-lg:gap-4 items-center justify-between"
    >
        <button
            class="bg-[#CBD5E1] p-4 flex hover:opacity-60 max-lg:p-2 transition-all items-center rounded-full"
            @click="downPNG"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="undefined"
                class="fill-white justify-center flex size-8 max-lg:size-4 hover:fill-primary-400"
            >
                <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>
        </button>
        <img
            :src="`main-page-image/carousel-image/${carousel[n]}.png`"
            alt=""
            class="max-w-[80%] max-lg:w-[60%] max-lg:rounded-lg rounded-md"
            :class="custom"
        />
        <button
            class="bg-[#CBD5E1] p-4 flex hover:opacity-60 max-lg:p-2 transition-all items-center rounded-full"
            @click="nextPNG"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="undefined"
                class="fill-white size-8 max-lg:size-4 hover:fill-primary-400"
            >
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
        </button>
    </div>
</template>

<script setup>
const {
    wood = "hover:scale-105",
    catalog = "hover:scale-105",
    trash = "hover:scale-105",
} = defineProps(["wood", "catalog", "trash"]);

const burger = ref(["hidden"]);

function changeBurger() {
    burger.value == "hidden"
        ? (burger.value = "inline")
        : (burger.value = "hidden");
    console.log(burger.value);
}
</script>

<template>
    <div
        class="flex items-center justify-between max-md:justify-around mx-auto max-lg:max-w-2xl my-8 max-w-4xl"
    >
        <div class="fixed z-50 inset-x-0 md:hidden" :class="burger">
            <div
                class="fixed inset-0 bg-black/20 backdrop-blur-sm"
                @click="changeBurger"
            ></div>
            <div
                class="fixed top-4 right-4 w-full max-w-52 bg-white rounded-lg shadow-lg px-6 py-4 text-base font-semibold text-slate-900"
            >
                <div class="flex flex-col gap-4">
                    <div class="flex justify-between">
                        <NuxtLink class="hover:text-primary-400" to="/"
                            >О досках
                        </NuxtLink>
                        <button
                            @click="changeBurger"
                            class="inline items-center z-50 justify-center text-slate-500 hover:text-slate-600"
                        >
                            <svg viewBox="0 0 10 10" class="w-2.5 h-2.5 z-0">
                                <path
                                    d="M0 0L10 10M10 0L0 10"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                ></path>
                            </svg>
                        </button>
                    </div>
 
                    <NuxtLink
                        class="hover:text-primary-400"
                        to="/catalog"
                        >Каталог</NuxtLink
                    >

                    <NuxtLink class="hover:text-primary-400" to="/pages/trash.vue""
                        >Корзина</NuxtLink
                    >
                </div>
            </div>
        </div>
        <NuxtLink to="/">
            <img
                src="../public/lotos.svg"
                alt="Лотос, Lotos"
                class="size-12 hover:cursor-pointer max-lg:size-8"
            />
        </NuxtLink>
        <div class="hidden max-md:block">
            <h1
                class="uppercase text-primary-400 text-center text-xl font-bold"
            >
                Доски садху
            </h1>
        </div>
        <div class="hidden max-md:block" @click="changeBurger">
            <img src="../public/burger.svg" alt="" />
        </div>
        <div class="flex gap-24 max-md:hidden">
            <NuxtLink
                to="/"
                class="uppercase font-medium text-primary-400 hover:text-primary-700"
                :class="wood"
                >О досках</
                NuxtLink>
            <NuxtLink
                to="/catalog"
                class="uppercase font-medium text-primary-400 hover:scale-105 hover:text-primary-700"
                :class="catalog"
                >Каталог</NuxtLink
            >
            <NuxtLink
                to="/trash"
                class="uppercase font-medium text-primary-400 hover:scale-105 hover:text-primary-700"
                :class="trash"
                >Корзина</NuxtLink
            >
        </div>
    </div>
</template>

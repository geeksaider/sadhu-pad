<script setup></script>
<template>
    <div class="flex gap-10 max-w-4xl mx-auto items-center">
        <button
            class="bg-[#CBD5E1] p-4 flex hover:opacity-60 transition-all items-center rounded-full h-fit w-fit"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="undefined"
                class="fill-white size-8 hover:fill-primary-400"
            >
                <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>
        </button>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw7j4gA52GRvdwC9bzL0Gl5DxU9xqA4-ifZQ&s"
            :src="carousel"
            alt=""
            class="basis-11/12 rounded-md"
        />
        <button
            class="bg-[#CBD5E1] p-4 flex hover:opacity-60 transition-all items-center rounded-full h-fit w-fit"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="undefined"
                class="fill-white size-8 hover:fill-primary-400"
            >
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
        </button>
    </div>
</template>

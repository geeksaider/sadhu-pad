<script setup>
const {
    numberPad,
    materialOne,
    colorOne,
    materialTwo,
    colorTwo,
    nailType,
    nailDistance,
    nailForm,
    addToning,
    costPad,
} = defineProps([
    "numberPad",
    "materialOne",
    "colorOne",
    "materialTwo",
    "colorTwo",
    "nailType",
    "nailDistance",
    "nailForm",
    "addToning",
    "costPad",
]);

const accordionClass = ref(["hidden"]);

function accordion() {
    accordionClass.value == "hidden"
        ? (accordionClass.value = "flex")
        : (accordionClass.value = "hidden");
}
</script>

<template>
    <div>
        <button
            class="bg-slate-400 hover:scale-105 py-2 w-fit px-12 rounded-3xl text-xl duration-500 font-bold uppercase transition-all hover:bg-slate-500/80 text-white"
            @click="accordion"
        >
            Доска {{ numberPad }} ᐯ
        </button>
        <div
            class="bg-white text-center py-3 overflow-hidden transition-all duration-500 text-black font-bold flex-col gap-3 pt-8"
            :class="accordionClass"
        >
            <p>
                Материал 1 - {{ materialOne }}<br />
                Цвет (Если есть) -
                {{ colorOne }}
            </p>
            <p>
                Материал 2 - {{ materialTwo }}<br />3 Цвет (Если есть) -
                {{ colorTwo }}
            </p>
            <p>Гвозди - {{ nailType }}</p>
            <p>Расстояние - {{ nailDistance }}</p>
            <p>Форма доски - {{ nailForm }}</p>
            <p>Допы - {{ addToning == true ? "да" : "нет" }}</p>
            <p class="font-bold">Цена - {{ costPad }}</p>
        </div>
    </div>
</template>

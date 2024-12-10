<script setup>
const selectedColorOne = ref("none");
const selectedColorTwo = ref("none");
const selectMaterialOne = ref("");
const selectMaterialTwo = ref("");
const selectNail = ref("");
const selectNailPad = ref("");
const addToning = ref("");
const selectDistance = ref("default");
const padList = ref([]);
const cost = ref(Number(getItem("nowCost")));
const form = ref("hidden");

const blockOne = ref("");
const blockTwo = ref("");
const blockFive = ref("");
const blockThree = ref("");
const blockFour = ref("");

let count = 0;

const error = "shadow-lg shadow-red-200";

onMounted(() => {
    if (getItem("padListInStorage") != null) {
        let padListStorage = JSON.parse(getItem("padListInStorage"));
        for (let i = 0; i < padListStorage.length; i++) {
            padList.value.push(padListStorage[i]);
        }
    }
});

watch(
    padList,
    () => {
        setItem("padListInStorage", JSON.stringify(padList.value));
    },
    { deep: true }
);

watch(
    cost,
    () => {
        setItem("nowCost", JSON.stringify(cost.value));
    },
    { deep: true }
);

function getItem(item) {
    if (process.client) {
        return localStorage.getItem(item);
    } else {
        return undefined;
    }
}

function setItem(item, value) {
    if (process.client) {
        localStorage.setItem(item, value);
        return true;
    } else {
        return false;
    }
}

function changeSelectColor(option) {
    selectedColorOne.value = option.target.value;
}
function changeSelectColorTWo(option) {
    selectedColorTwo.value = option.target.value;
}

function createPad() {
    let costPad = 0;

    selectMaterialOne.value == "EVA" ? (costPad += 250) : (costPad += 500);
    selectMaterialTwo.value == "EVA" ? (costPad += 250) : (costPad += 500);
    selectNail.value == "cuprum" ? (costPad += 3000) : costPad;
    addToning.value == true ? (costPad += 1000) : costPad;
    selectNailPad.value == "back" ? (costPad += 3000) : costPad;
    costPad += 7000;

    let pad = {
        materialOne: selectMaterialOne.value,
        colorOne: selectedColorTwo.value,
        materialTwo: selectMaterialTwo.value,
        colorTwo: selectedColorTwo.value,
        nailType: selectNail.value,
        nailForm: selectNailPad.value,
        nailDistance: selectDistance.value,
        addToning: addToning.value,
        numberPad: ++count,
        costPad: costPad,
        index: Date.now(),
    };

    console.log(pad);

    cost.value += costPad;

    selectMaterialOne.value = "";
    selectedColorOne.value = "none";
    selectMaterialTwo.value = "";
    selectedColorTwo.value = "none";
    selectNail.value = "";
    selectNailPad.value = "";
    selectDistance.value = "default";
    addToning.value = "";

    padList.value.push(pad);
}

function delitePad(index) {
    padList.value.forEach((pad) =>
        pad.index == index ? (cost.value -= pad.costPad) : cost.value
    );
    padList.value = padList.value.filter((pad) => pad.index != index);
}

function check() {
    if (
        selectMaterialOne.value != "" &&
        selectMaterialTwo.value != "" &&
        selectNail.value != "" &&
        selectDistance.value != "default" &&
        selectNailPad.value != ""
    ) {
        return createPad();
    } else {
        selectMaterialOne.value == ""
            ? (blockOne.value = error)
            : (blockOne.value = " ");
        selectMaterialTwo.value == ""
            ? (blockTwo.value = error)
            : (blockTwo.value = " ");
        selectNail.value == ""
            ? (blockThree.value = error)
            : (blockThree.value = " ");
        selectDistance.value == "default"
            ? (blockFour.value = error)
            : (blockFour.value = " ");
        selectNailPad.value == ""
            ? (blockFive.value = error)
            : (blockFive.value = " ");
    }
}

function showForm() {
    form.value == "hidden" ? (form.value = "flex") : (form.value = "hidden");
    console.log(form.value);
}
</script>
<template>
    <main
        class="max-lg:max-w-2xl max-w-4xl flex flex-col gap-8 max-md:max-w-xl my-20 mx-auto"
    >
        <DescriptionHeading>Покупка</DescriptionHeading>
        <BlockHeading class="w-full">Материал внешней стороны:</BlockHeading>
        <div
            class="grid gap-5 place-items-center grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 items-center"
        >
            <SelectField
                :type="'beech'"
                :category="'materialOne'"
                :link="'material/beech'"
                :error="blockOne"
                v-model="selectMaterialOne"
                >Бук</SelectField
            >
            <SelectField
                :type="'oak'"
                :category="'materialOne'"
                :link="'material/oak'"
                :error="blockOne"
                v-model="selectMaterialOne"
                >Дуб</SelectField
            >
            <SelectField
                :type="'EVA'"
                :category="'materialOne'"
                :link="`colors/${selectedColorOne}`"
                v-model="selectMaterialOne"
                :error="blockOne"
                >Eva</SelectField
            >
            <SelectField
                :type="'ash'"
                :category="'materialOne'"
                :link="'material/ash'"
                v-model="selectMaterialOne"
                :error="blockOne"
                >Ясень</SelectField
            >
            <SelectField
                :type="'merabu'"
                :category="'materialOne'"
                :link="'material/merabu'"
                v-model="selectMaterialOne"
                :error="blockOne"
                >Мерабу</SelectField
            >

            <select
                class="items-center h-[64px] text-center text-xl uppercase font-bold bg-stone-200/60 w-fit min-w-[240px] rounded-xl"
                @change="changeSelectColor"
                v-model="selectedColorOne"
                :disabled="selectMaterialOne !== 'EVA'"
            >
                <option value="none" disabled selected>Цвета EVA</option>
                <option value="black">Черный</option>
                <option value="blue2">Голубой</option>
                <option value="blue">Синий</option>
                <option value="brown">Коричневый</option>
                <option value="gray">Серо-фиолетовый</option>
                <option value="gray2">Светло-серый</option>
                <option value="gray3">Темно-серый</option>
                <option value="green">Зеленый</option>
                <option value="orange">Оранжевый</option>
                <option value="pink">Алый</option>
                <option value="pink2">Розовый</option>
                <option value="violet">Фиолетовый</option>
                <option value="white">Белый</option>
                <option value="yellow">Желтый</option>
            </select>
        </div>
        <BlockHeading class="w-full">Материал внутреней стороны:</BlockHeading>
        <div
            class="grid gap-5 place-items-center grid-cols-3 items-center max-lg:grid-cols-2 max-sm:grid-cols-1"
        >
            <SelectField
                :type="'beech'"
                :category="'materialTwo'"
                :link="'material/beech'"
                v-model="selectMaterialTwo"
                :error="blockTwo"
                >Бук</SelectField
            >
            <SelectField
                :type="'oak'"
                :category="'materialTwo'"
                :link="'material/oak'"
                v-model="selectMaterialTwo"
                :error="blockTwo"
                >Дуб</SelectField
            >
            <SelectField
                :type="'EVA'"
                :category="'materialTwo'"
                :link="`colors/${selectedColorTwo}`"
                v-model="selectMaterialTwo"
                :error="blockTwo"
                >Eva</SelectField
            >
            <SelectField
                :type="'ash'"
                :category="'materialTwo'"
                :link="'material/ash'"
                v-model="selectMaterialTwo"
                :error="blockTwo"
                >Ясень</SelectField
            >
            <SelectField
                :type="'merabu'"
                :category="'materialTwo'"
                :link="'material/merabu'"
                v-model="selectMaterialTwo"
                :error="blockTwo"
                >Мерабу</SelectField
            >

            <select
                class="items-center h-[64px] text-center text-xl uppercase font-bold bg-stone-200/60 w-fit min-w-[240px] rounded-xl"
                @change="changeSelectColorTWo"
                v-model="selectedColorTwo"
                :disabled="selectMaterialTwo !== 'EVA'"
            >
                <option value="none" disabled selected>Цвета EVA</option>
                <option value="black">Черный</option>
                <option value="blue2">Голубой</option>
                <option value="blue">Синий</option>
                <option value="brown">Коричневый</option>
                <option value="gray">Серо-фиолетовый</option>
                <option value="gray2">Светло-серый</option>
                <option value="gray3">Темно-серый</option>
                <option value="green">Зеленый</option>
                <option value="orange">Оранжевый</option>
                <option value="pink">Алый</option>
                <option value="pink2">Розовый</option>
                <option value="violet">Фиолетовый</option>
                <option value="white">Белый</option>
                <option value="yellow">Желтый</option>
            </select>
        </div>
        <BlockHeading class="w-full">Гвозди:</BlockHeading>
        <div
            class="grid gap-5 place-items-center grid-cols-2 justify-center items-center max-lg:grid-cols-1"
        >
            <SelectField
                :category="'nail'"
                :type="'zinc'"
                :link="'nail/zincnail'"
                v-model="selectNail"
                :error="blockThree"
                >Цинк</SelectField
            >
            <select
                name=""
                id=""
                v-model="selectDistance"
                :class="blockFour"
                class="items-center h-[64px] row-span-2 text-center text-xl uppercase font-bold bg-stone-200/60 w-fit min-w-[240px] rounded-xl"
            >
                <option value="default" disabled selected>Расстояние</option>
                <option value="10mm">10mm</option>
                <option value="12mm">12mm</option>
            </select>
            <SelectField
                :category="'nail'"
                :type="'cuprum'"
                :error="blockThree"
                v-model="selectNail"
                :link="'nail/cuprumnail'"
                >Медь</SelectField
            >
        </div>
        <BlockHeading class="w-full">Форма:</BlockHeading>
        <div
            class="grid gap-5 grid-cols-2 place-items-center justify-center items-center max-lg:grid-cols-2 max-sm:grid-cols-1"
        >
            <SelectField
                :category="'padform'"
                :type="'sled'"
                :link="'formspad/image'"
                :custom="'min-w-[300px]'"
                v-model="selectNailPad"
                :error="blockFive"
                >След</SelectField
            >
            <SelectField
                :category="'padform'"
                :type="'rectangle'"
                :link="'formspad/image'"
                :custom="'min-w-[300px]'"
                :error="blockFive"
                v-model="selectNailPad"
                >Прямоугольник</SelectField
            >
            <SelectField
                :category="'padform'"
                :type="'blob'"
                :link="'formspad/image'"
                :custom="'min-w-[300px]'"
                v-model="selectNailPad"
                :error="blockFive"
                >Капля</SelectField
            >
            <SelectField
                :category="'padform'"
                :type="'ultraflex'"
                :link="'formspad/image'"
                :custom="'min-w-[300px]'"
                v-model="selectNailPad"
                :error="blockFive"
                >Ультрагибкая</SelectField
            >
            <SelectField
                :category="'padform'"
                :type="'ultrathin'"
                :link="'formspad/image'"
                :custom="'min-w-[300px]'"
                v-model="selectNailPad"
                :error="blockFive"
                >Ультратонкая</SelectField
            >
            <SelectField
                :category="'padform'"
                :type="'back'"
                :link="'formspad/image'"
                :custom="'min-w-[300px]'"
                v-model="selectNailPad"
                :error="blockFive"
                >Для спины</SelectField
            >
        </div>
        <BlockHeading class="w-full">Дополнительно:</BlockHeading>
        <div class="flex justify-center">
            <div
                class="flex items-center justify-center gap-4 hover:scale-105 transition-all"
            >
                <input class="size-6" type="checkbox" v-model="addToning" />
                <label for="" class="font-bold text-xl text-primary-400"
                    >Тонирование</label
                >
                <span class="font-bold text-stone-400 text-xl">+ 1000</span>
            </div>
        </div>
        <div class="flex w-full justify-center mt-12">
            <Button @click="check">Сохранить</Button>
        </div>
        <hr
            class="w-full border-2 border-primary-700 mt-32 max-lg:mt-16"
            max-lg:border-1
        />
        <div
            class="flex justify-between max-lg:flex-col max-lg:items-center max-lg:gap-6 text-left"
        >
            <div class="flex gap-4">
                <DescriptionHeading :mx="'mx-0'">Итог:</DescriptionHeading>
                <DescriptionHeading>{{ cost }}</DescriptionHeading>
            </div>
            <div class="flex flex-col gap-5">
                <div v-for="pad in padList" class="flex gap-4">
                    <Accordion
                        :numberPad="pad.numberPad"
                        :materialOne="pad.materialOne"
                        :colorOne="pad.colorOne"
                        :materialTwo="pad.materialTwo"
                        :colorTwo="pad.colorTwo"
                        :nailType="pad.nailType"
                        :nailDistance="pad.nailDistance"
                        :nailForm="pad.nailForm"
                        :addToning="pad.addToning"
                        :costPad="pad.costPad"
                    ></Accordion>
                    <button
                        class="hover:scale-105 my-3 max-lg:size-4 size-6 transition-all duration-100"
                        @click="delitePad(pad.index)"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            fill="#EA3323"
                        >
                            <path
                                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <Button @click="showForm">Купить</Button>
            <div class="fixed z-50 inset-x-0" :class="form">
                <div
                    class="fixed inset-0 bg-black/20 backdrop-blur-sm"
                    @click="showForm"
                ></div>
                <div
                    class="fixed top-3 right-[50%] translate-x-[50%] nright-4 min-w-96 bg-white rounded-lg shadow-lg px-6 py-4 text-base font-semibold text-slate-900"
                >
                    <div class="flex flex-col gap-4">
                        <button
                            @click="showForm"
                            class="inline items-center z-50 justify-center text-primary-400 hover:text-primary-700"
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
                        <Form></Form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

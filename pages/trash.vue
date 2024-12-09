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

let count = 0;

function changeSelectColor(option) {
    selectedColorOne.value = option.target.value;
}
function changeSelectColorTWo(option) {
    selectedColorTwo.value = option.target.value;
}

function createPad() {
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
    };

    selectMaterialOne.value = "";
    selectedColorOne.value = "none";
    selectMaterialTwo.value = "";
    selectedColorTwo.value = "none";
    selectNail.value = "";
    selectNailPad.value = "";
    selectDistance.value = "default";
    addToning.value = "";

    padList.value.push(pad);

    console.log(padList.value);
}
</script>
<template>
    <main
        class="max-lg:max-w-2xl max-w-4xl flex flex-col gap-8 max-md:max-w-xl my-20 mx-auto"
    >
        <DescriptionHeading>Покупка</DescriptionHeading>
        <BlockHeading class="w-full">Материал внешней стороны:</BlockHeading>
        <div class="grid gap-5 place-items-center grid-cols-3 items-center">
            <SelectField
                :type="'beech'"
                :category="'materialOne'"
                :link="'material/beech'"
                v-model="selectMaterialOne"
                >Бук</SelectField
            >
            <SelectField
                :type="'oak'"
                :category="'materialOne'"
                :link="'material/oak'"
                v-model="selectMaterialOne"
                >Дуб</SelectField
            >
            <SelectField
                :type="'EVA'"
                :category="'materialOne'"
                :link="`colors/${selectedColorOne}`"
                v-model="selectMaterialOne"
                >Eva</SelectField
            >
            <SelectField
                :type="'ash'"
                :category="'materialOne'"
                :link="'material/ash'"
                v-model="selectMaterialOne"
                >Ясень</SelectField
            >
            <SelectField
                :type="'merabu'"
                :category="'materialOne'"
                :link="'material/merabu'"
                v-model="selectMaterialOne"
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
        <div class="grid gap-5 place-items-center grid-cols-3 items-center">
            <SelectField
                :type="'beech'"
                :category="'materialTwo'"
                :link="'material/beech'"
                v-model="selectMaterialTwo"
                >Бук</SelectField
            >
            <SelectField
                :type="'oak'"
                :category="'materialTwo'"
                :link="'material/oak'"
                v-model="selectMaterialTwo"
                >Дуб</SelectField
            >
            <SelectField
                :type="'EVA'"
                :category="'materialTwo'"
                :link="`colors/${selectedColorTwo}`"
                v-model="selectMaterialTwo"
                >Eva</SelectField
            >
            <SelectField
                :type="'ash'"
                :category="'materialTwo'"
                :link="'material/ash'"
                v-model="selectMaterialTwo"
                >Ясень</SelectField
            >
            <SelectField
                :type="'merabu'"
                :category="'materialTwo'"
                :link="'material/merabu'"
                v-model="selectMaterialTwo"
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
            class="grid gap-5 place-items-center grid-cols-2 justify-center items-center"
        >
            <SelectField
                :category="'nail'"
                :type="'zinc'"
                :link="'nail/zincnail'"
                v-model="selectNail"
                >Цинк</SelectField
            >
            <select
                name=""
                id=""
                v-model="selectDistance"
                class="items-center h-[64px] row-span-2 text-center text-xl uppercase font-bold bg-stone-200/60 w-fit min-w-[240px] rounded-xl"
            >
                <option value="default" disabled selected>Расстояние</option>
                <option value="10mm">10mm</option>
                <option value="12mm">12mm</option>
            </select>
            <SelectField
                :category="'nail'"
                :type="'cuprum'"
                v-model="selectNail"
                :link="'nail/cuprumnail'"
                >Медь</SelectField
            >
        </div>
        <BlockHeading class="w-full">Форма:</BlockHeading>
        <div
            class="grid gap-5 grid-cols-2 place-items-center justify-center items-center"
        >
            <SelectField
                :category="'padform'"
                :type="'sled'"
                :link="'formspad/image'"
                :custom="'min-w-[300px]'"
                v-model="selectNailPad"
                >След</SelectField
            >
            <SelectField
                :category="'padform'"
                :type="'rectangle'"
                :link="'formspad/image'"
                :custom="'min-w-[300px]'"
                v-model="selectNailPad"
                >Прямоугольник</SelectField
            >
            <SelectField
                :category="'padform'"
                :type="'blob'"
                :link="'formspad/image'"
                :custom="'min-w-[300px]'"
                v-model="selectNailPad"
                >Капля</SelectField
            >
            <SelectField
                :category="'padform'"
                :type="'ultraflex'"
                :link="'formspad/image'"
                :custom="'min-w-[300px]'"
                v-model="selectNailPad"
                >Ультрагибкая</SelectField
            >
            <SelectField
                :category="'padform'"
                :type="'ultrathin'"
                :link="'formspad/image'"
                :custom="'min-w-[300px]'"
                v-model="selectNailPad"
                >Ультратонкая</SelectField
            >
            <SelectField
                :category="'padform'"
                :type="'back'"
                :link="'formspad/image'"
                :custom="'min-w-[300px]'"
                v-model="selectNailPad"
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
            <Button @click="createPad">Сохранить</Button>
        </div>
        <hr
            class="w-full border-2 border-primary-700 mt-32 max-lg:mt-16"
            max-lg:border-1
        />
        <div class="flex justify-between text-left">
            <div>
                <DescriptionHeading :mx="'mx-0'">Итог:</DescriptionHeading>
                <span>{{ cost }}</span>
            </div>
            <div class="flex flex-col gap-5 ml-16">
                <div v-for="pad in padList">
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
                    ></Accordion>
                </div>
            </div>
            <Button>Купить</Button>
        </div>
    </main>
</template>

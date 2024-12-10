<script setup>
const carousel = ["big1", "big2", "big3"];
</script>

<template>
    <main class="max-lg:max-w-2xl max-w-4xl max-md:max-w-xl my-20 mx-auto">
        <BlockHeading> Материалы </BlockHeading>
        <div class="flex flex-col gap-12 max-md:gap-8">
            <DescriptionHeading :custom="'text-2xl opacity-90'"
                >Дерево</DescriptionHeading
            >
            <div
                class="grid grid-cols-4 mt-8 max-lg:grid-cols-2 gap-4 max-md:size-52 max-md:mb-20 max-md:mt-0 max-md:mx-auto"
            >
                <div class="flex flex-col gap-4 items-center">
                    <img src="/catalog-images/material/merabu.png" />
                    <DescriptionText>Мерабу</DescriptionText>
                </div>
                <div class="flex flex-col gap-4 items-center">
                    <img src="/catalog-images/material/oak.png" />
                    <DescriptionText>Дуб</DescriptionText>
                </div>
                <div class="flex flex-col gap-4 items-center">
                    <img src="/catalog-images/material/beech.png" />
                    <DescriptionText>Бук</DescriptionText>
                </div>
                <div class="flex flex-col gap-4 items-center">
                    <img src="/catalog-images/material/ash.png" />
                    <DescriptionText>Ясень</DescriptionText>
                </div>
            </div>
            <DescriptionHeading :custom="'text-2xl opacity-90'"
                >EVA</DescriptionHeading
            >
            <div
                class="grid grid-cols-7 auto-rows-auto max-md:size-44 max-md:mx-auto max-lg:grid-cols-4 max-md:grid-cols-4 items-center place-items-center justify-center mt-8 max-md:mt-0 gap-4"
            >
                <img
                    src="/catalog-images/colors/yellow.png"
                    alt=""
                    class="w-fit"
                />

                <img
                    src="/catalog-images/colors/blue.png"
                    alt=""
                    class="w-fit"
                />
                <img
                    src="/catalog-images/colors/blue2.png"
                    alt=""
                    class="w-fit"
                />
                <img
                    src="/catalog-images/colors/violet.png"
                    alt=""
                    class="w-fit"
                />
                <img
                    src="/catalog-images/colors/pink.png"
                    alt=""
                    class="w-fit"
                />
                <img
                    src="/catalog-images/colors/pink2.png"
                    alt=""
                    class="w-fit"
                />
                <img
                    src="/catalog-images/colors/brown.png"
                    alt=""
                    class="w-fit"
                />
                <img
                    src="/catalog-images/colors/gray.png"
                    alt=""
                    class="w-fit"
                />
                <img
                    src="/catalog-images/colors/white.png"
                    alt=""
                    class="w-fit"
                />
                <img
                    src="/catalog-images/colors/gray2.png"
                    alt=""
                    class="w-fit"
                />
                <img
                    src="/catalog-images/colors/gray3.png"
                    alt=""
                    class="w-fit"
                />
                <img
                    src="/catalog-images/colors/green.png"
                    alt=""
                    class="w-fit"
                />
                <img
                    src="/catalog-images/colors/orange.png"
                    alt=""
                    class="w-fit max-lg:col-start-2 max-md:col-start-2"
                />
                <img
                    src="/catalog-images/colors/black.png"
                    alt=""
                    class="w-fit"
                />
            </div>
        </div>
        <BlockHeading>ГВОЗДи</BlockHeading>
        <section class="flex flex-col max-md:gap-8 gap-16">
            <div
                class="flex gap-12 max-md:gap-4 max-md:max-w-xs max-md:mx-auto justify-center items-center"
            >
                <img
                    src="/catalog-images/nail/zinc.png"
                    alt=""
                    class="max-lg:h-80 max-md:w-44 max-md:h-auto"
                />
                <div class="flex flex-col gap-12 max-md:gap-4">
                    <DescriptionHeading :custom="'text-2xl opacity-90 '"
                        >Цинковые</DescriptionHeading
                    >
                    <DescriptionText :custom="'text-center max-md:basis-2/3 '"
                        >Ощущения от стояния на цинковых гвоздях часто
                        описываются как яркие, звонкие и более поверхностные.
                        Цинк стимулирует нервные окончания, создавая эффект
                        тонизирующего массажа.</DescriptionText
                    >
                </div>
            </div>
            <div
                class="flex gap-12 justify-center max-md:gap-4 max-md:max-w-xs max-md:mx-auto items-center"
            >
                <div class="flex flex-col gap-12 max-md:gap-4 ml-4">
                    <DescriptionHeading :custom="'text-2xl opacity-90 '"
                        >Медные</DescriptionHeading
                    >
                    <DescriptionText :custom="'text-center max-md:basis-2/3'"
                        >Ощущения от медных гвоздей часто описываются как
                        глубокие, теплые и более продолжительные. Медь создает
                        ощущение прогревающего массажа, воздействуя на более
                        глубокие слои тканей.</DescriptionText
                    >
                </div>
                <img
                    src="/catalog-images/nail/cuprum.png"
                    alt=""
                    class="max-lg:h-80 max-md:h-auto max-md:w-44"
                />
            </div>
            <div class="flex justify-around">
                <DescriptionHeading :custom="'text-2xl opacity-90 '"
                    >10 ММ</DescriptionHeading
                >
                <DescriptionHeading :custom="'text-2xl opacity-90 '"
                    >12 ММ</DescriptionHeading
                >
            </div>
            <DescriptionText
                :custom="'text-center text-black font-bold mt-12px'"
                >Чем больше гвоздей, тем больше точек соприкосновения с
                кожей,<br />
                что увеличивает сложность.</DescriptionText
            >
        </section>
        <div class="flex flex-col gap-12 mt-20">
            <DescriptionHeading>ФОрмы</DescriptionHeading>
            <Carousel
                :carousel="carousel"
                custom="object-contain aspect-square"
            ></Carousel>
        </div>
    </main>
</template>

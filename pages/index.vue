<script setup></script>
<template>
    <main
        class="max-w-[1000px] max-lg:max-w-[800px] max-sm:max-w-[500px] mx-auto"
    >
        <h1
            class="uppercase text-primary-400 text-center text-6xl mt-16 [word-spacing:20px] font-bold max-lg:hidden"
        >
            Доски садху
        </h1>
        <Carousel class="my-20 max-lg:my-14" />
        <DescriptionHeading> Что это? </DescriptionHeading>
        <div
            class="my-20 flex gap-16 max-lg:my-8 max-lg:gap-7 max-md:gap-4 justify-center items-center"
        >
            <img
                src="/main-page-image/sadxy4.png"
                alt=""
                class="max-h-80 max-lg:max-w-[35%] max-lg:rounded-lg"
            />
            <DescriptionText class="max-lg:leading-6"
                >Доска садху – это уникальный инструмент для самопознания и
                развития, представляющий собой деревянную платформу с
                вертикально вбитыми гвоздями. Эта практика, уходящая корнями в
                древнюю Индию, позволяет выйти за рамки привычного комфорта и
                испытать глубокие трансформации на физическом, эмоциональном и
                духовном уровнях</DescriptionText
            >
        </div>
        <DescriptionHeading>История создания</DescriptionHeading>
        <div
            class="grid grid-cols-2 max-lg:gap-4 max-sm:gap-2 max-lg:px-8 max-lg:my-8 gap-10 my-20"
        >
            <div
                class="row-span-2 flex flex-col h-fit gap-20 max-lg:gap-8 max-lg:pr-12 max-md:pr-2 max-sm:pr-0 max-sm:gap-1 max-md:gap-4 pr-16"
            >
                <DescriptionText
                    :custom="'text-primary-700 font-bold  max-lg:leading-6 basis-0 leading-7 max-sm:leading-4'"
                    >Большим выдумщикам сложно рассказывать о себе, их легко
                    только застать за бесконечными экспериментами, поэтому этот
                    текст пишет не сам Денис. Возможно, вы впервые слышите о
                    нём, но уже не раз пользовались его разработкой.
                </DescriptionText>
                <DescriptionText
                    :custom="'basis-0 leading-7 max-lg:leading-6  max-sm:leading-4'"
                >
                    История досок с гвоздями уходит в далекую древность, но
                    технология их производства не сильно продвинулась вперед,
                    разве что машины стали верными помощниками. Важной проблемой
                    был разброс в длине гвоздей, даже в рамках одной партии.
                    Решив эту проблему “подпружиниванием” доски, Денис добился
                    также большей проработки стопы. В кругу практиков
                    стремительно закрепилось название "динамических гвоздей".
                    Бывшие же неуклюжими и громоздкими формы досок перешли в
                    лаконичные и облегченные дизайны. Внешний материал EVA
                    позволил использовать доски в бане, их можно случайно
                    уронить (не повторяйте дома) и не бояться за сохранность в
                    поездке.
                </DescriptionText>
            </div>
            <div
                class="flex flex-col max-lg:gap-4 max-sm:gap-1 items-center justify-center"
            >
                <img
                    src="/main-page-image/sadxy1.png"
                    alt=""
                    class="max-lg:rounded-lg max-lg:max-w-[90%] max-lg:h-fit"
                />
                <img
                    src="/main-page-image/sadxy2.png"
                    alt=""
                    class="max-lg:rounded-lg max-lg:block max-lg:max-w-[90%] max-lg:h-fit hidden"
                />
            </div>
            <DescriptionText
                class="h-fit leading-7 max-lg:leading-5 flex max-sm:text-start max-sm:pr-0 max-sm:col-span-1 max-lg:text-center max-lg:pr-4 max-lg:col-span-2"
                >С 2018 года на наших динамических досках работают мастера и
                частные покорители внутренней бездны. Доски делаются с заботой
                из ниже указанных компонентов и дизайнов по вашему решению.
                Могут быть закуплены особые материалы и разработаны уникальные
                дизайны за дополнительную оплату, есть оптовые предложения.
            </DescriptionText>
            <div class="cols-span-2 flex gap-12 max-lg:gap-10">
                <img
                    src="/main-page-image/sadxy5.png"
                    alt=""
                    class="max-lg:rounded-lg max-lg:max-w-[90%]"
                />
                <img
                    src="/main-page-image/sadxy2.png"
                    alt=""
                    class="max-lg:hidden"
                />
                <img
                    src="/main-page-image/sadxy7.png"
                    alt=""
                    class="hidden max-lg:block max-lg:rounded-lg max-lg:max-w-[90%]"
                />
            </div>
        </div>
        <DescriptionHeading :custom="'text-left'"
            >Уровни<br />
            сложности</DescriptionHeading
        >
        <div
            class="my-20 max-lg:my-8 max-w-[800px] max-md:max-w-[370px] max-lg:max-w-[600px] mx-auto gap-4 flex flex-col"
        >
            <DescriptionHeading
                :custom="'text-xl ml-10 max-lg:ml-4 w-fit mx-0 max-lg:text-sm text-left'"
                >Профи</DescriptionHeading
            >
            <div class="flex gap-18 max-lg:gap-6 max-sm:gap-2">
                <div class="flex max-h-[700px] ml-8 max-lg:ml-3">
                    <img
                        src="/main-page-image/arrow.svg"
                        alt=""
                        class="block h-[100%] object-fill"
                    />
                </div>
                <div
                    class="grid grid-cols-2 max-w-[650px] max-lg:gap-x-2 max-lg:gap-y-6 gap-y-10 gap-x-12 items-center h-fit"
                >
                    <DescriptionText class="h-fit" :custom="'font-bold'"
                        >Доски с индивидуальными настройками, например, с
                        возможностью регулировать высоту гвоздей или их
                        расположение.</DescriptionText
                    >
                    <img
                        src="/main-page-image/sadxy8.png"
                        alt=""
                        class="h-[250px] max-lg:h-[100px] mx-auto rounded-lg"
                    />
                    <img
                        src="/main-page-image/sadxy6.png"
                        alt=""
                        class="h-[250px] max-lg:h-[100px] w-[110% ] mx-auto"
                    />
                    <DescriptionText
                        class="h-fit"
                        :custom="' font-bold text-right mr-6'"
                        >Доски с меньшим шагом (8 мм и менее), большим
                        количеством гвоздей и более твердым
                        материалом</DescriptionText
                    >
                    <DescriptionText
                        class="col-span-2"
                        :custom="'font-bold mx-auto w-[50%] basis-0 text-center'"
                        >Доски с большим шагом между гвоздями (10 мм и более),
                        небольшим количеством гвоздей и мягким
                        материалом.</DescriptionText
                    >
                </div>
            </div>
            <DescriptionHeading
                :custom="'text-xl  max-lg:ml-4  mx-0 ml-10 max-lg:text-sm text-left'"
                >Начинающий</DescriptionHeading
            >
        </div>
        <div class="flex justify-center"><Button>Купить</Button></div>
    </main>
</template>

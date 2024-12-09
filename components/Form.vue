<script setup>
const vPhone = {
    created: (el) => {
        function replaceNumberForInput(value) {
            let val = "";
            const x = value
                .replace(/\D/g, "")
                .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

            if (x[1] === "7" || x[1] === "8") {
                x[1] = "+7 (";
            } else {
                x[2] = x[1];
                x[1] = "+7 (";
            }

            if (!x[2] && x[1] !== "") {
                val = x[1] === "+7 (" ? x[1] : "+7 (" + x[1];
            } else {
                val = !x[3]
                    ? x[1] + x[2]
                    : x[1] +
                      x[2] +
                      ") " +
                      x[3] +
                      (x[4] ? "-" + x[4] : "") +
                      (x[5] ? "-" + x[5] : "");
            }

            return val;
        }

        function replaceNumberForPaste(value) {
            const r = value.replace(/\D/g, "");
            let val = r;
            if (val.charAt(0) === "7") {
                val = "8" + val.slice(1);
            }
            return replaceNumberForInput(val);
        }

        el.oninput = function (e) {
            if (!e.isTrusted) {
                return;
            }
            this.value = replaceNumberForInput(this.value);
        };

        el.onchange = function () {
            setTimeout(() => {
                const pasteVal = el.value;
                this.value = replaceNumberForPaste(pasteVal);
            });
        };
    },
};
</script>

<template>
    <main class="flex items-center justify-center">
        <form class="p-6 w-full flex gap-4 flex-col">
            <h2 class="text-xl font-semibold text-primary-700">
                Оформление заказа
            </h2>

            <div>
                <label for="name" class="text-sm font-medium text-primary-400"
                    >Имя</label
                >
                <input
                    type="text"
                    id="name"
                    name="name"
                    class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-700"
                    placeholder="Введите ваше имя"
                    required
                />
            </div>

            <div>
                <label for="phone" class="text-sm font-medium text-primary-400"
                    >Телефон</label
                >
                <input
                    type="tel"
                    v-phone
                    id="phone"
                    name="phone"
                    class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-700"
                    placeholder="+7 (XXX) XXX-XX-XX"
                    required
                />
            </div>
            <div>
                <label for="email" class="text-sm font-medium text-primary-400"
                    >Почта</label
                >
                <input
                    type="email"
                    id="email"
                    name="email"
                    class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-700"
                    placeholder="example@example.com"
                    required
                />
            </div>

            <div>
                <label class="text-sm font-medium text-primary-400"
                    >Способ оплаты</label
                >
                <div class="mt-2 space-y-2">
                    <div class="flex items-center">
                        <input
                            type="radio"
                            id="cash"
                            name="payment"
                            value="cash"
                            class="h-4 w-4 text-primary-400"
                            required
                        />
                        <label for="cash" class="ml-2 text-sm text-gray-700"
                            >Наличными</label
                        >
                    </div>
                    <div class="flex items-center">
                        <input
                            type="radio"
                            id="online"
                            name="payment"
                            value="online"
                            class="h-4 w-4 text-primary-400"
                        />
                        <label
                            for="online"
                            class="ml-2 text-sm text-primary-400"
                            >Онлайн</label
                        >
                    </div>
                </div>
            </div>

            <div>
                <label
                    for="comment"
                    class="text-sm font-medium text-primary-400"
                    >Комментарий к заказу</label
                >
                <textarea
                    id="comment"
                    name="comment"
                    rows="4"
                    class="mt-1 w-full px-3 py-2 border border-primary-900 rounded-md shadow-sm focus:outline-none focus:border-primary-700"
                    placeholder="Напишите комментарий"
                ></textarea>
            </div>
            <button
                type="submit"
                class="w-full bg-primary-400 text-white py-2 px-4 rounded-md hover:bg-primary-700"
            >
                Отправить заказ
            </button>
        </form>
    </main>
</template>

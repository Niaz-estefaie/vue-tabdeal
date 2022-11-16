<script setup>
import { onMounted, reactive, computed } from "vue";
import axios from "axios";
import Button from "../../components/base/Button.vue";

const state = reactive({ cryptoArray: [], search: "" });

const filteredList = computed(() => {
  return state.cryptoArray.filter((crypto) => {
    return (
      crypto.name.toLowerCase().includes(state.search.toLowerCase()) ||
      crypto.name_fa.toLowerCase().includes(state.search.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(state.search.toLowerCase())
    );
  });
});

const getCryptoList = () => {
  axios
    .get("https://apitabdeal.org/r/plots/currency_prices")
    .then((response) => {
      state.cryptoArray = response.data;
    });
};

const roundNumber = (options) => {
  const places = 10 ** options.decimalPlaces;
  const res = Math.round(options.number * places) / places;
  return `${res.toString().includes("-") ? "" : "+"}${res}%`;
};

const numberFormatter = (num, digits) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
};

onMounted(() => {
  getCryptoList();
});
</script>

<template>
  <section class="crypto-section">
    <div class="crypto-section-title">
      <div class="crypto-text">
        <div class="crypto-title">خرید و فروش بیش از 200 ارز دیجیتال</div>
        <div class="crypto-subtitle">
          شما در تبدیل فقط چند کلیک با خرید و فروش ارز‌های دیجیتال دلخواه
        </div>
      </div>
      <div class="crypto-subtitle-mobile">
        بیش از
        <span class="text-primary">200</span>
        ارز دیجیتال را با تبدیل به راحتی خرید و فروش کنید
      </div>
      <div class="crypto-search">
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          ></label>
          <div class="relative">
            <input
              type="search"
              id="default-search"
              v-model="state.search"
              class="search-input"
              placeholder="جست و جو نماد، نام و ..."
              required
            />
            <div class="svg-class">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="crypto-section-table">
      <div class="crypto-table">
        <table class="table-auto">
          <thead>
            <tr>
              <th>نماد</th>
              <th>آخرین قیمت</th>
              <th>تغییرات قیمت</th>
              <th class="hidden sm:block">حجم 24 ساعت</th>
              <th class="hidden sm:block"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="crypto in filteredList.slice(0, 7)"
              :key="crypto.id"
              class="table-row"
            >
              <td>
                <span>{{ crypto.symbol }}</span>
                <span class="light-text">{{ crypto.name_fa }}</span>
              </td>
              <td>
                <span dir="ltr" class="text-right">
                  <div v-if="crypto.markets && crypto.markets[1]">
                    {{ crypto.markets[1]?.price }}
                    <span class="light-text">USDT</span>
                  </div>
                  <div class="light-text">
                    ~ {{ crypto.markets[0]?.price }} تومان
                  </div>
                </span>
              </td>
              <td
                :class="
                  crypto?.change_percent.includes('-')
                    ? 'text-red-500'
                    : 'text-green-500'
                "
              >
                <span dir="ltr">
                  {{
                    roundNumber({
                      number: crypto.change_percent,
                      decimalPlaces: 2,
                    })
                  }}
                </span>
              </td>
              <td class="text-sm hidden sm:block">
                {{ numberFormatter(crypto.usdt_volume, 0) }}
                <span class="light-text">USDT</span>
              </td>
              <td>
                <Button
                  class="hidden sm:block"
                  colorClasses="bg-primary text-black"
                  effectClass="hover:opacity-90"
                >
                  <template v-slot:text>خرید و فروش</template>
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
.crypto-section {
  @apply container mx-auto sm:-mt-16 bg-white z-30 rounded-xl px-3 py-6 sm:shadow-xl relative;
}
.crypto-text {
  @apply hidden sm:flex flex-col;
}
.crypto-section-title {
  @apply flex flex-col sm:flex-row justify-items-start justify-between mb-2 py-2 sm:px-3;
}
.crypto-title {
  @apply lg:text-4xl text-2xl font-medium mb-2;
}
.crypto-subtitle {
  @apply text-sm text-gray-500;
}
.crypto-subtitle-mobile {
  @apply block sm:hidden font-medium text-sm text-gray-600 leading-[1.57rem] font-bold;
}
.crypto-search {
  @apply text-sm text-gray-500 mt-4;
}
.svg-class {
  @apply absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none;
}
.search-input {
  @apply block w-full h-12 p-4 pl-10 text-sm rounded-lg bg-gray-100 text-gray-400 focus:outline-0;
}
.table-auto {
  @apply w-full text-base;
}
.table-auto th {
  @apply text-xs text-gray-500 font-bold text-right;
}
.table-auto td .light-text {
  @apply text-sm text-gray-500 font-normal;
}
.table-auto .table-row {
  @apply min-h-[60px] h-[60px];
}
</style>

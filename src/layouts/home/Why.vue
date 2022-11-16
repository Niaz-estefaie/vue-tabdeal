<script setup>
import { ref } from "vue";

const cardArray = ref([
  {
    img: "https://tabdeal.org/_nuxt/image/e810c6.webp",
    title: "احراز هویت سریع",
    description:
      "با ثبت نام و انجام فرایند سریع و آسان احراز هویت در تبدیل، فقط چند کلیک با شروع معامله فاصله دارید.",
  },
  {
    img: "	https://tabdeal.org/_nuxt/image/e21fab.webp",
    title: "کیف پول اختصاصی امن",
    description:
      "با دعوت از دوستان خود به تبدیل، درآمد کسب نمایید. اطلاعات بیشتر را در صفحهٔ دعوت از دوستان ببینید",
  },
  {
    img: "https://tabdeal.org/_nuxt/image/803f01.webp",
    title: "حداقل فاصله خرید و فروش",
    description:
      "ربات‌های بازارگردان تبدیل با نظارت 24 ساعته بر قیمت‌های جهانی، کمترین میزان گپ خرید و فروش را برای کاربران ایجاد می‌نماید.",
  },
  {
    img: "https://tabdeal.org/_nuxt/image/fbc733.webp",
    title: "بیشترین تنوع ارزی",
    description:
      "در صرافی ارز دیجیتال تبدیل، بیشترین تنوع ارزی در بین بازار‌های معاملاتی ایران را با بازار‌های تومانی و تتری متنوع تجربه کنید.",
  },
]);
</script>

<template>
  <section class="why-section">
    <div class="why-container">
      <div class="why-title">چرا تبدیل؟</div>
      <div class="why-image">
        <img
          src="https://tabdeal.org/_nuxt/image/f66ed0.webp"
          alt="dots"
          height="16"
        />
      </div>
      <div class="lower-text">
        چرا تبدیل را برای خرید و فروش ارزهای دیجیتال به شما پیشنهاد می‌کنیم؟
      </div>
      <div class="card-content">
        <div class="card-titles">
          <div v-for="(item, index) in cardArray" :key="index" class="card">
            <div class="card-img">
              <img :src="item.img" alt="why-card" class="object-scale-down" />
            </div>
            <div class="item-title">{{ item.title }}</div>
            <div class="item-description">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.why-section {
  @apply flex;
}
.why-container {
  @apply m-auto container py-6 sm:py-24;
}
.why-title {
  @apply text-4xl font-medium text-black text-center;
}

.why-image {
  @apply flex items-center justify-center py-4;
}
.lower-text {
  @apply py-4 text-black text-center;
}
.card {
    @apply hover:shadow-xl hover:rounded-lg px-4 py-6 cursor-pointer;
}
.card-content {
  @apply flex flex-col sm:flex-row gap-4 items-center justify-center p-4;
}
.card-titles {
  @apply flex flex-col sm:flex-row items-start gap-4;
}
.icon-item {
  @apply w-[100px] h-[100px] min-h-[100px] min-w-[100px] max-h-[100px] max-w-[100px] rounded-full flex items-center justify-center shadow-lg;
}
.item-title {
  @apply text-lg text-center sm:text-start font-bold my-2;
}
.item-description {
  @apply text-sm text-justify;
}
.card-img {
  @apply flex items-center justify-center my-2;
}
</style>

<script setup>
import { ref } from "vue";

const heroArray = ref([
  {
    img: "https://tabdeal.org/_nuxt/image/7990fa.svg",
    title: "ابزار حرفه ای معامله",
    description:
      "با ابزار‌های حرفه‌ای خرید و فروش از جمله حدضرر (stop loss) و OCO ریسک معاملات خود را در هر زمان و هر شرایطی مدیریت کنید.",
  },
  {
    img: "	https://tabdeal.org/_nuxt/image/905082.svg",
    title: "کیف پول اختصاصی امن",
    description:
      "ارز‌های دیجیتال خود را می‌توانید روی کیف پول امن خود در تبدیل نگهداری کنید و در صورت نیاز روی انواع شبکه‌ها به کیف پول‌های دیگر انتقال دهید.",
  },
  {
    img: "https://tabdeal.org/_nuxt/image/3ca5ae.svg",
    title: "پشتیبانی سریع",
    description:
      "تیم پشتیبانی تبدیل در تمامی شرایط از طریق چت آنلاین و تلفن، همراه شما هستند و راهنمایی‌های لازم جهت استفاده از سایت را به شما می‌رسانند.",
  },
]);
</script>

<template>
  <section class="join-section">
    <div class="join-container">
      <div class="join-title">همین امروز به خانواده بزرگ تبدیل بپیوندید</div>
      <div class="join-image">
        <img
          src="https://tabdeal.org/_nuxt/image/f66ed0.webp"
          alt="dots"
          height="16"
        />
      </div>
      <div class="lower-text">
        با هر سطحی از دانش در سریع‌ترین زمان با آموزش گام به گام سرمایه گذاری را
        تجربه کنید.
      </div>
      <div class="hero-content">
        <img
          src="https://tabdeal.org/_nuxt/image/cea045.webp"
          width="384"
          height="280"
          alt="panel-mockup-mobile"
          loading="lazy"
          sizes="(max-width: 320px) 384px, (max-width: 640px) 384px, (max-width: 1024px) 500px, 384px"
        />
        <div class="hero-titles">
          <div
            class="hero-items"
            v-for="(item, index) in heroArray"
            :key="index"
          >
            <div class="icon-item">
              <img :src="item.img" alt="hero-item" />
            </div>
            <div>
              <div class="item-title">{{ item.title }}</div>
              <div class="item-description">{{ item.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.join-section {
  @apply bg-secondary-lightest flex;
}
.join-container {
  @apply m-auto container py-6 sm:py-24;
}
.join-title {
  @apply text-4xl font-medium text-black text-center;
}

.join-image {
  @apply flex items-center justify-center py-4;
}
.lower-text {
  @apply py-4 text-black text-center;
}
.hero-content {
  @apply flex flex-col sm:flex-row gap-4 items-center justify-center p-4;
}
.hero-titles {
  @apply flex flex-col items-start gap-4;
}
.hero-items {
  @apply flex flex-col sm:flex-row items-center justify-center gap-4;
}
.icon-item {
  @apply w-[100px] h-[100px] min-h-[100px] min-w-[100px] max-h-[100px] max-w-[100px] rounded-full flex items-center justify-center shadow-lg;
}
.item-title {
  @apply text-lg text-center sm:text-start font-bold;
}
.item-description {
  @apply text-sm text-justify;
}
</style>

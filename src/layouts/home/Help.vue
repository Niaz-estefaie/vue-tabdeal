<script setup>
import { ref } from "vue";
import Button from "../../components/base/Button.vue";

const cardArray = ref([
  {
    img: "https://tabdeal.org/_nuxt/image/0a0433.webp",
    title: "راهنمای گام به گام",
    description:
      "هر آنچه درباره استفاده از خدمات تبدیل باید بدانید را در اینجا بیابید.",
    buttonText: "جست و جو در سوالات",
  },
  {
    img: "https://tabdeal.org/_nuxt/image/0d9456.webp",
    title: "آکادمی تبدیل",
    description:
      "راهنمای خرید و فروش ارز‌های دیجیتال همراه با آموزش‌های ویدیویی معامله‌گری",
    buttonText: "مطالعه مطالب",
  },
  {
    img: "https://tabdeal.org/_nuxt/image/0d9456.webp",
    title: "سوالات متداول",
    description:
      "در این بخش می‌توانید پاسخ سوالات متداولی را که ممکن است برای شما پیش بیاید، مشاهده کنید.",
    buttonText: "جست و جو در راهنما",
  },
]);
</script>

<template>
  <section class="help-section">
    <div class="help-container">
      <div class="card-content">
        <div class="card-titles">
          <div v-for="(item, index) in cardArray" :key="index" class="card">
            <div class="card-img">
              <img :src="item.img" alt="help-card" class="object-scale-down" />
            </div>
            <div class="item-title">{{ item.title }}</div>
            <div class="item-description">{{ item.description }}</div>
            <Button
              colorClasses="bg-transparent text-brown font-bold"
              effectClass="hover:bg-[#f3ecd9]"
            >
              <template v-slot:text>{{ item.buttonText }}</template>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.help-section {
  @apply flex;
}
.help-container {
  @apply m-auto container py-6 sm:py-24;
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
  @apply text-lg text-center sm:text-start font-bold my-2 pb-3;
}
.item-description {
  @apply text-sm text-justify my-2 pb-3;
}
.card-img {
  @apply flex items-center my-2;
}
</style>
